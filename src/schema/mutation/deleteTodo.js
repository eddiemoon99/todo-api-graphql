import { Todo } from "../../models/Todo"

// handler function for deleting a todo item
export const deleteTodo = async(_, {
  username,
  password,
  todoId,
}, context) => {
  const { user } = context;
  if (user !== null && user.username === username && user.password === password) {
    await Todo.findByIdAndDelete(todoId);
    return {
      status: "succesful",
      message: "Succesfully deleted todo item.",
    };
  } else {
    return {
      status: "unsuccessful",
      message: "Invalid credentials. You do not have permissions to delete todo item."
    }
  }
};