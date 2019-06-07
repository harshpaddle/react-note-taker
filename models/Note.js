// import mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

// create our model
const Note = mongoose.model('note', NoteSchema);

module.export = Note;