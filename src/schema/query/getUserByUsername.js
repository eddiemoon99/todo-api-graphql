import { User } from "../../models/User"

// Handler function for getting specific user by username
export const getUserByUsername = async (_, {username}) => {
  return await User.findOne({username: username});
};