import { User } from "../../models/User";

// Handler function for authenticating logging in
export const login = async (_, {
  username,
  password,
},context) => {
  // This is just simple authentication logic to check if username and password pair exists in db
  // Usually we would use JWT to manage sessions for login and logout
  const { user } = context;
  if(user !== null && user.username === username && user.password === password){
    return {
      message: "Logged in successfully!"
    }
  } else {
    return {
      message: "Login failed. Invalid credentials."
    }
  }
};