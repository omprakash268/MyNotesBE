import express from 'express';
import { getAllUsers, getUserById, addNewUser, deleteUserById, updateUserById, loginUserAuth } from "../Controller/userController.js";

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/:id', getUserById);
router.post('/login',loginUserAuth)
router.post('/add', addNewUser);
router.delete('/delete/:id', deleteUserById);
router.patch('/update/:id', updateUserById);

export default router;