import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
  
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true, unique: true },
  
}
);

export default model('Note', noteSchema);