import { User } from "../../models/User";

// handler function for updating a user
export const updateUser = async (_, {
    firstName,
    lastName,
    username,
    password
  }, context) => {
    const { user } = context;
    if (user !== null && user.username === username) {
      const newUser = {
        firstName: firstName,
        lastName: lastName, 
        username: username,
        password: password
      }
      await User.updateOne({username: username}, newUser);
      return {
        status: 'successfull',
        message: 'updated user successfully',
        user: newUser
      }
    } else {
      return {
        status: 'unsuccessful',
        message: 'not authorized to update user information'
      }
    }
  };