import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: { type: String },
    description: String,
    tag: String,
    createdAt: Number,
});

const Note = mongoose.model("Note", noteSchema);

export default Note;