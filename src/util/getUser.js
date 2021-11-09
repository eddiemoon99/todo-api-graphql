import { User } from "../models/User";

// helper function to find user when username and password is passed into request header
export const getUser = async (username, password) => {
  return await User.findOne({
    username: username,
    password: password
  });
}