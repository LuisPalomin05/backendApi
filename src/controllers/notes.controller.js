const notesCntrl = {};

const Note = require('../models/Notes');

// obtener una sola nota
notesCntrl.getNotes = async (req, res) =>
    {
        const notes =  await Note.find();
        res.json(notes);
    } 

    // obtener todas las notas
notesCntrl.getNote = async (req, res) =>{
    const notes = await Note.findById(req.params.id);
    res.json(notes);
};

    // crear una nota
// crear una nota
notesCntrl.createNotes = async (req, res) => {

        const { title, content, date, author } = req.body;
        // Crear una nueva nota
        const newNote = new Note({
            title,
            content,
            date,
            author
        });
        
        // Guardar la nota en la base de datos
        await newNote.save();
        
};



// actualizar una nota
notesCntrl.updateNotes = async (req, res) => 
{
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id:req.params.id }, {
        title,
        content,
        author
    });
    res.json({ message: 'Note updated' });
};

// eliminar una nota
notesCntrl.deleteNotes = async (req, res) => 
    {
       await Note.findByIdAndDelete(req.params.id);
       res.json({ message: 'Note deleted' });
    };

module.exports = notesCntrl;   