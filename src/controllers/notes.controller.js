const notesController = {};

const Note = require("../models/notes");

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesController.createNotes = async (req, res) => {
  const { title, content,author, date,  } = req.body;
  const newNote = new Note({
    title,
    content,
    author,
    date,
    
  });

  await newNote.save();
  res.json({ message: "post request" });
};

notesController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
};

notesController.updateNote = async (req, res) => {
  const { title, content, author } = req.body;
  await Note.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
  });


  res.json({ message: "put request" });
};

notesController.deleteNote = async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  console.log(note);
  res.json({ message: "delete request" });
};

module.exports = notesController;
