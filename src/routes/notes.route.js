import express from 'express';
import * as noteController from '../controllers/notes.controller';

const noterouter = express.Router();

//route to get all notes
noterouter.get('/getnotes', noteController.getAllNotes);

//route to create a new note
noterouter.post('/newnote', noteController.newNote);

//route to update a single user by their user id
noterouter.put('/:_id', noteController.updateNote);

//route to delete a single note 
noterouter.delete('/:_id', noteController.deleteNote);

export default noterouter;
