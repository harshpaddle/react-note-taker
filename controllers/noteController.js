const { Note } = require('../models');

// export a serires of methods for handling our routes

// GET all notes
//  api/notes
function getAllNotes(req, res) {

  Note
    .findAll({})
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
}

// GET single note by its id
// /api/notes/:id
function getNoteById(req, res) {

  Note
    .findById(req.params.id)
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

}

// POST/create a new note
//  /api/notes with req.body => { title: 'title content', body: 'body content }
function createNote(req, res) {

  Note
    .create(req.body)
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });

};

// PUT/update a note by its id
// /api/note/:id with req.body hodling content to update
function updateNote(req, res) {

  Note
    .findByIdAndUpdate(req.params.id,
      {
        $set: {
          title: req.body.title,
          body: req.body.body
          // new: true sends back the updated document
        }
      }, 
      { new: true }
    )
      .then(dbNoteData => res.status(200).json(dbNoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

}

// DELETE/remove a note by its _id
// /api/notes/:id
function removeNote(req, res) {
  Note
    .remove({
      _id: req.params.id
    })
    .then(dbNoteData => res.status(200).json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
}

// export allfunction as methods we can import into our route definitions
module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  removeNote
}