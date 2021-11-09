import { User } from "../../models/User"

// handler function for deleting a user
export const deleteUser = async(_, {
  username,
  password,
}, context) => {
  const { user } = context;
  if (user !== null && user.username === username && user.password === password) {
    await User.findOneAndDelete({
      username: username,
      password: password
    });
    return {
      status: "succesful",
      message: "Succesfully deleted user.",
    };
  } else {
    return {
      status: "unsuccessful",
      message: "Invalid credentials. You do not have permissions to delete user."
    }
  }
};