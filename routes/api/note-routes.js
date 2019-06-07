// import express router and our controller
const router = require('express').Router();
const { 
  getAllNotes, 
  getNoteById, 
  createNote, 
  updateNote, 
  removeNote 
} = require('../../controllers/noteController');


// define routes

// GET and POST routes for /api/notes
router
  .route('/')
  .get(getAllNotes)
  .post(createNote);

router
  .route('/:id')
  .get(getNoteById)
  .put(updateNote)
  .delete(removeNote);


module.exports = router;