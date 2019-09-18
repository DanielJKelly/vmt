import user1 from '../fixtures/user';

describe('Workspace/replayer', function() {
  before(function() {
    cy.task('restoreAll').then(() => cy.login(user1));
  });

  after(function() {
    cy.logout();
  });

  function checkInstructions(expectedText) {
    cy.getTestElement('instructions-container').should('contain', expectedText);
  }

  function checkRoomInfoTabName(name) {
    cy.getTestElement('room-info-tab-name').should('contain', name);
  }

  function clickTab(name) {
    cy.getTestElement('tabs-container').within(() => {
      cy.contains(name).click();
    });
  }

  function createTab(details) {
    const { name, instructions = '', roomType = 'geogebra' } = details;

    cy.getTestElement('add-tab').click();
    cy.get('input[name=name]').type(name);
    cy.get('input[name=instructions]').type(instructions);
    // GeoGebra default selected

    if (roomType === 'desmos') {
      // click desmos radio btn
    }
    cy.getTestElement('create-tab').click();

    clickTab(name);
    checkInstructions(instructions);
    checkRoomInfoTabName(name);
  }

  function editTab(newName) {
    cy.getTestElement('room-info-tab-name')
      .as('container')
      .find('div > i.fas.fa-edit')
      .click();

    cy.get('@container')
      .find('div > input')
      .clear()
      .type(newName);

    cy.get('@container').within(() => {
      cy.contains('Save').click();
    });
    cy.get('@container').should('contain', newName);
  }

  function editInstructions(newInstructions) {
    cy.getTestElement('instructions-container')
      .as('container')
      .find('div > i.fas.fa-edit')
      .click();

    cy.get('@container')
      .find('div > textarea')
      .clear()
      .type(newInstructions);

    cy.get('@container').within(() => {
      cy.contains('Save').click();
    });
    checkInstructions(newInstructions);
  }

  it('loads a workspace', function() {
    cy.get('#Rooms').click();
    cy.getTestElement('content-box-room 1').click();
    cy.getTestElement('Enter').click();
    cy.getTestElement('chat')
      .children()
      .should('have.length', 1);
  });
  it('prevents tool selection without taking control', function() {
    cy.getTestElement('awareness-desc')
      .contains('jl_picard joined room 1')
      .should('be.visible');
    cy.getTestElement('take-control').click();
    cy.getTestElement('release-control').click();
    cy.get(':nth-child(5) > .toolbar_button > .gwt-Image').click();
    cy.getTestElement('control-warning').should('be.visible');
    cy.getTestElement('cancel').click();
    cy.getTestElement('chat')
      .children()
      .should('have.length', 4);
  });
  it('allows tool selection after taking control', function() {
    cy.getTestElement('take-control').click();
    cy.getTestElement('awareness-desc')
      .contains('jl_picard selected the move tool')
      .should('be.visible');
    cy.getTestElement('chat')
      .children()
      .children()
      .should('have.length', 10);
    cy.get(':nth-child(5) > .toolbar_button > .gwt-Image').click();
    cy.getTestElement('awareness-desc')
      .contains('jl_picard selected the polygon tool')
      .should('be.visible');
  });
  describe('Managing tabs', function() {
    const secondTabName = 'Tab 2 Bananas';
    const thirdTabName = 'Tab 3 Apples';

    it('successfully creates a new tab', function() {
      const name = secondTabName;
      const instructions = `These are the instructions for ${name}.`;
      createTab({ name, instructions });
    });

    it('creates another tab', function() {
      const name = thirdTabName;
      const instructions = `These are the instructions for ${name}`;
      createTab({ name, instructions });
    });
    // TODO create desmos tabs (including pasting workspace link)
    // TODO create ggb tab from file

    it('edits tab name', function() {
      const newTabName = 'Third Tab Renamed';

      editTab(newTabName);
    });

    it('edits tab instructions', function() {
      const newInstructions = `These are nonsensical instructions.`;
      editInstructions(newInstructions);
    });
  });

  describe('Loading Replayer', function() {
    it('loads a replayer', function() {
      cy.getTestElement('exit-room').click();
      cy.getTestElement('Replayer').click();
    });
  });

  describe('Viewing an Activity Workspace', function() {
    const workspaceUrlRegex = new RegExp(
      'myVMT/workspace/[0-9a-fA-F]{24}/activity'
    );

    before(function() {
      cy.contains('Community').click();
      cy.contains('Activities').click();
    });
    describe('Viewing one of your own activities', function() {
      const activityName = 'stand-alone-activity';
      const initialTabName = 'Tab 1';
      const newTabName = 'Tab 1 Renamed';
      const newInstructions = 'These are the new instructions...';

      it('Should load successfully', function() {
        cy.contains(activityName).click();
        cy.url().should('match', workspaceUrlRegex);
      });

      it('Should display activity owner message', function() {
        cy.getTestElement('owner-msg').should('exist');
      });

      it('Should display link to about page', function() {
        cy.getTestElement('about-link').should('exist');
      });

      it('Should give option to save activity', function() {
        // does save button work?
        // does the user have to change the activity to be able to save?
        cy.getTestElement('save-activity').should('exist');
      });

      it('Should display current tab name', function() {
        cy.getTestElement('room-info-tab-name').should(
          'contain',
          initialTabName
        );
      });

      it('Should let you edit tab name', function() {
        editTab(newTabName);
      });

      it('Should let you edit the instructions', function() {
        editInstructions(newInstructions);
      });

      it('Clicking Exit Activity should take you back to community', function() {
        cy.getTestElement('exit-room').click();
        cy.url().should('include', '/community/activities');
      });
    });

    describe("Viewing someone else's activity", function() {
      const initialTabName = 'Tab 1';
      before(function() {
        cy.contains('Community').click();
        cy.contains('Activities').click();
      });

      const activityName = "Deanna's course 2 activity";
      const copyName = 'Deanna Course 2 - Picard';
      it('Should load successfully', function() {
        cy.contains(activityName).click();
        cy.url().should('match', workspaceUrlRegex);
      });

      it('Should not display activity owner message', function() {
        cy.getTestElement('owner-msg').should('not', 'exist');
      });

      it('Should not display link to about page', function() {
        cy.getTestElement('about-link').should('not', 'exist');
      });

      it('Should display current tab name', function() {
        cy.getTestElement('room-info-tab-name').should(
          'contain',
          initialTabName
        );
      });

      xit('Should not allow editing of tab name', function() {});

      xit('Should not allow editing of instructions', function() {});

      it('Should let you copy activity', function() {
        cy.getTestElement('copy-activity').click();
        cy.get('input[name="new name"]').type(copyName);
        cy.contains('Copy Activity').click();

        cy.url().should('include', '/myVMT/activities');
        cy.contains(copyName).should('exist');
      });
    });
  });
});
