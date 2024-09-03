import Note from "../Model/Notes.js";

export const getAllNotesById = async (req, res) => {
    const id = req.params.id;

    const allNotes = await Note.find();
    res.json({ msg: "getAllNotesById", data: allNotes });
}

export const createNote = async (req, res) => {
    try {
        const newNote = new Note(req.body)

        await newNote.save();
        res.json({ msg: "createNote" });
    } catch (err) {
        res.send(err);
    }
}

export const deleteNoteById = async (req, res) => {
    const id = req.params.id;
    try {
        await Note.findByIdAndDelete(id);
        res.status(200).json({ msg: "Delete succefully", status: 200 });
    } catch (err) {
        res.status(400).json({ status: 400, msg: "Something went wrong.", err: err })
    }
}

export const updateNoteById = async (req, res) => {

    const id = req.params.id;
    try {
        await Note.findByIdAndUpdate(id, req.body);
        res.status(200).json({ msg: "Updated succefully", status: 200 });
    } catch (err) {
        res.status(400).json({ status: 400, msg: "Something went wrong.", err: err })
    }

}
