import mongoose from "mongoose";

const Schema = mongoose.Schema;

// mongoose schema for user items
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true 
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);