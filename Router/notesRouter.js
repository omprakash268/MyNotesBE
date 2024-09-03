import express from 'express';
import { getAllNotesById, createNote, deleteNoteById, updateNoteById } from '../Controller/notesController.js';

const router = express.Router();

router.get('/all/:id', getAllNotesById);
router.post('/create', createNote);
router.delete('/delete/:id', deleteNoteById);
router.patch('/update/:id', updateNoteById);

export default router;