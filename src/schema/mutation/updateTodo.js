import { Todo } from "../../models/Todo"

// handler function for updating a todo item
export const updateTodo = async(_, {
  username,
  password,
  todoId,
  description,
  category,
  priority,
}, context) => {
  const { user } = context;
  if (user !== null && user.username === username && user.password === password) {
    await Todo.findByIdAndUpdate(todoId, {
      username: username,
      description: description,
      category: category,
      priority: priority
    });
    return {
      status: "succesful",
      message: "Succesfully updated todo item.",
    };
  } else {
    return {
      status: "unsuccessful",
      message: "Invalid credentials. You do not have permissions to update todo item."
    }
  }
};