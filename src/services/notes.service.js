import Note from '../models/note.model';

// display all notes
export const getAllNotes = async () => {
    const data = await Note.find();
    return data;
  };
  
  //create a new note
  export const newNote= async (body) => {
    const data = await Note.create(body);
    return data;
  };
  
  //update single note
  export const updateNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };
  
  //delete a note
  export const deleteNote = async (id) => {
    await Note.findByIdAndDelete(id);
    return '';
  };
