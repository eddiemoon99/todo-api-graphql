import { User } from "../../models/User";
import { isUsernameTaken } from "../../util/isUsernameTaken";

// handler function for creating a new user
export const createUser = async (_, {
    firstName,
    lastName,
    username,
    password
  }) => {
    const isTaken = await isUsernameTaken(username);
    if (isTaken) {
      return {
        status: 'unsuccesful',
        message: 'Username already taken.'
      };
    } else {
      // usually for password field we would use encryption like bcrypt before saving to db
      const newUser = new User({
        firstName,
        lastName,
        username,
        password
      });
      await newUser.save();
      return {
        status: 'succesful',
        message: 'Succesfully created new user.',
        user: newUser
      };
    }
  };