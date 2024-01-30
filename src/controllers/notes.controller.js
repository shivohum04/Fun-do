import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/notes.service';
import Note from '../models/note.model'; 

/**
 * Controller to get all notes available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNotes = async (req, res, next) => {
    try {
      const data = await NoteService.getAllNotes();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes dispalyed successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  /**
   * Controller to create a new note
   * @param  {object} req - request object
   * @param {object} res - response object
   * @param {Function} next
   */
  export const newNote = async (req, res, next) => {
    try {
      const data = await NoteService.newNote(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'note created successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controller to update a note
   * @param  {object} req - request object
   * @param {object} res - response object
   * @param {Function} next
   */
  export const updateNote = async (req, res, next) => {
    try {
      const data = await NoteService.updateNote(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'note was updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  
  /**
   * Controller to delete a note
   * @param  {object} req - request object
   * @param {object} res - response object
   * @param {Function} next
   */
  export const deleteNote = async (req, res, next) => {
    try {
      await NoteService.deleteNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'the Note was deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };
  