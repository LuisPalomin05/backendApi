const {Router} = require('express');
const router = Router();

const {getNotes, createNotes,getNote,deleteNote,updateNote} = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes).post(createNotes);

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);



module.exports = router;