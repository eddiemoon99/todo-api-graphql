import mongoose from "mongoose";

const Schema = mongoose.Schema;

// mongoose schema for todo items
const todoSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
});

export const Todo = mongoose.model('Todo', todoSchema);