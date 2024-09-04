import mongoose, { Schema } from "mongoose";

const noteSchema = new mongoose.Schema({
    title: { type: String },
    description: String,
    tag: String,
    createdAt: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Note = mongoose.model("Note", noteSchema);

export default Note;