import { User } from "../../models/User"

// Handler function for getting all users
export const getAllUsers = async () => {
  return await User.find();
};