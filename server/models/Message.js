const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const Room = require('./Room.js');

const Message = new mongoose.Schema({
  user: { type: ObjectId, ref: 'User' },
  text: { type: String },
  room: { type: ObjectId, ref: 'Room', required: true },
  autogenerated: { type: Boolean },
  timestamp: { type: Number }, // SAVING THIS IN UNIX TIME FOR EASY SORTING but in MS
  reference: {
    element: { type: String },
    elementType: { type: String },
    tab: { type: ObjectId, ref: 'Tab' },
    wasObjectDeleted: { type: Boolean }, // so we know not to update deleted references when objects are renamed
    wasObjectUpdated: { type: Boolean }, // e.g. renamed, moved, redefined
    pathParameter: { type: Number },
    isForRegion: { type: Boolean },
    x: { type: Number },
    y: { type: Number },
    z: { type: Number },
  },
  messageType: {
    type: String,
    enum: [
      'TEXT',
      'TOOK_CONTROL',
      'RELEASED_CONTROL',
      'LEFT_ROOM',
      'SWITCH_TAB',
      'NEW_TAB',
      'JOINED_ROOM',
    ],
    default: 'TEXT',
  },
  color: { type: String, default: '#333' },
  isTrashed: { type: Boolean, default: false },
});

// Add this message to the room's chat
Message.pre('save', async function() {
  if (this.isNew) {
    // @TODO CHANGIN controlledBY HERE IS TERRRRIBLLE!!!!! THIS SHOULD ALL BE DONE SOMEWHERE ELSE WHERE ITS LESS OF A SIDE EFFECT
    if (this.messageType === 'TOOK_CONTROL') {
      try {
        await Room.findByIdAndUpdate(this.room, {
          controlledBy: this.user._id,
          $addToSet: { chat: this._id },
        });
      } catch (err) {
        console.log('ERROR: ', err);
      }
    } else if (
      this.messageType === 'LEFT_ROOM' ||
      this.messageType === 'RELEASED_CONTROL'
    ) {
      try {
        await Room.findByIdAndUpdate(this.room, {
          $addToSet: { chat: this._id },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await Room.findByIdAndUpdate(this.room, {
          $addToSet: { chat: this._id },
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});
module.exports = mongoose.model('Message', Message);
