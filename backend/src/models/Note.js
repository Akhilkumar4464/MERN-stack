import mongoose from "mongoose";

// 1- create a new schema
// 2- create a new model

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true ,  }); 

// timestamps: true to add createdAt and updatedAt fields

const Note = mongoose.model("Note", noteSchema);
export default Note;
