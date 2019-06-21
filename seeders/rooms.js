/* 1 */
const { ObjectId, ISODate } = require('./utils');

module.exports = [{
  "_id" : ObjectId("5ba289c57223b9429888b9b5"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [
      ObjectId("5c98e1169b093c0c9812b2f2")
  ],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : false,
  "name" : "room 1",
  "description" : "hello",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ed1"),
          "user" : ObjectId("5ba289ba7223b9429888b9b4"),
          "role" : "facilitator"
      },
  ],
  "creator" : ObjectId("5ba289ba7223b9429888b9b4"),
  "entryCode" : "rare-shrimp-45",
  "dueDate" : null,
  "image" : "http://tinygraphs.com/spaceinvaders/room 1?theme=berrypie&numcolors=4&size=220&fmt=svg",
  "createdAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "updatedAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "__v" : 0
},

/* 2 */
{
  "_id" : ObjectId("5ba289c57223b9429888b9b7"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : false,
  "name" : "request access",
  "description" : "hello",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ed3"),
          "user" : ObjectId("5ba289ba7223b9429888b9b4"),
          "role" : "facilitator"
      },
  ],
  "creator" : ObjectId("5ba289ba7223b9429888b9b4"),
  "entryCode" : "rare-shrimp-10",
  "dueDate" : null,
  "createdAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "updatedAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "__v" : 0
},

/* 3 */
{
  "_id" : ObjectId("5ba289c57223b9429888b9b3"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : false,
  "name" : "wrong entry code room",
  "description" : "hello",
  "entryCode" : "hello",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ed8"),
          "user" : ObjectId("5ba289ba7223b9429888b9b4"),
          "role" : "facilitator"
      },
  ],
  "creator" : ObjectId("5ba289ba7223b9429888b9b4"),
  "dueDate" : null,
  "createdAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "updatedAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "__v" : 0
},

/* 4 */
{
  "_id" : ObjectId("5c2e58e4684f328cbca1d997"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [
      ObjectId("5c2e58e4684f328cbca1d998")
  ],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : true,
  "name" : "Deanna's stand alone room",
  "description" : "",
  "creator" : ObjectId("5be1eba75854270cd0920faa"),
  "image" : "http://tinygraphs.com/spaceinvaders/gfggfg?theme=daisygarden&numcolors=4&size=220&fmt=svg",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73eda"),
          "user" : ObjectId("5be1eba75854270cd0920faa"),
          "role" : "facilitator"
      },
  ],
  "dueDate" : null,
  "createdAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "updatedAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "__v" : 0
},

/* 5 */
{
  "_id" : ObjectId("5ba289c57223b9429888b9b6"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : false,
  "name" : "room 2",
  "description" : "hello",
  "entryCode" : "hello",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ed6"),
          "user" : ObjectId("5ba289ba7223b9429888b9b4"),
          "role" : "facilitator"
      },
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ed5"),
          "user" : ObjectId("5bbbbd9a799302265829f5af"),
          "role" : "participant"
      },
  ],
  "creator" : ObjectId("5ba289ba7223b9429888b9b4"),
  "dueDate" : null,
  "createdAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "updatedAt" : ISODate("2018-09-19T17:39:17.490Z"),
  "__v" : 0
},

/* 6 */
{
  "_id" : ObjectId("5c2e58e4684f328cbca1d99f"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [
      ObjectId("5c2e58e4684f328cbca1d998")
  ],
  "privacySetting" : "public",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : true,
  "name" : "Deanna's course 1 room",
  "description" : "",
  "creator" : ObjectId("5be1eba75854270cd0920faa"),
  "image" : "http://tinygraphs.com/spaceinvaders/gfggfg?theme=daisygarden&numcolors=4&size=220&fmt=svg",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73edc"),
          "user" : ObjectId("5be1eba75854270cd0920faa"),
          "role" : "facilitator"
      },
  ],
  "entryCode" : "testEntrycode",
  "dueDate" : null,
  "createdAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "updatedAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "__v" : 0
},

/* 7 */
{
  "_id" : ObjectId("5c2e58e4684f328cbca1d99e"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [
      ObjectId("5c2e58e4684f328cbca1d998")
  ],
  "privacySetting" : "public",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : true,
  "name" : "Deanna's course 2 room",
  "description" : "",
  "creator" : ObjectId("5be1eba75854270cd0920faa"),
  "image" : "http://tinygraphs.com/spaceinvaders/gfggfg?theme=daisygarden&numcolors=4&size=220&fmt=svg",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ede"),
          "user" : ObjectId("5be1eba75854270cd0920faa"),
          "role" : "facilitator"
      },
  ],
  "dueDate" : null,
  "createdAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "updatedAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "__v" : 0
},

/* 8 */
{
  "_id" : ObjectId("5c2e58e4684f328cbca1dace"),
  "settings" : {
      "participantsCanCreateTabs" : false,
      "participantsCanChangePerspective" : false,
      "controlByTab" : false
  },
  "chat" : [],
  "currentMembers" : [],
  "tabs" : [
      ObjectId("5c2e58e4684f328cbca1d998")
  ],
  "privacySetting" : "private",
  "tempRoom" : false,
  "controlledBy" : null,
  "isTrashed" : true,
  "name" : "Q's Admin Room",
  "description" : "",
  "creator" : ObjectId("5ba289ba7223b9429888b9ee"),
  "image" : "http://tinygraphs.com/spaceinvaders/gfggfg?theme=daisygarden&numcolors=4&size=220&fmt=svg",
  "members" : [
      {
          "color" : "#f26247",
          "_id" : ObjectId("5d0d0f0a93908fe576b73ee0"),
          "user" : ObjectId("5ba289ba7223b9429888b9ee"),
          "role" : "facilitator"
      },
  ],
  "dueDate" : null,
  "createdAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "updatedAt" : ISODate("2019-01-03T18:48:04.573Z"),
  "__v" : 0
}];