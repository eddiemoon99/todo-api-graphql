import { User } from "../models/User";

// helper function for checking if username already exists in db
export const isUsernameTaken = async (username) => {
  const res = await User.find({username: username});
  return res.length !== 0;
}