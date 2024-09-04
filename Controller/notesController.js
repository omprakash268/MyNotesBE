import Note from "../Model/Notes.js";
import User from "../Model/User.js";

export const getAllNotesById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).populate('notes');
        if (user) {
            res.status(200).json({ msg: "Sucess", data: user.notes });
        } else {
            res.status(404).json({ msg: "Not found", data: [] });
        }
    } catch (err) {
        res.status(404).json({ msg: "Error", err: err });
    }

}

export const createNote = async (req, res) => {
    const id = req.params.id;
    try {
        const newNote = new Note({ ...req.body, user: id });

        await newNote.save();

        const user = await User.findByIdAndUpdate(id, { $addToSet: { notes: newNote._id } }, { new: true });

        res.json({ msg: "createNote", data: newNote });
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
