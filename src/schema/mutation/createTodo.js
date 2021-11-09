import { Todo } from "../../models/Todo"

// handler function for creating a new todo list item
export const createTodo = async(_, {
  username,
  description,
  category,
  priority,
}) => {
  const newTodo = new Todo({
    username,
    description,
    category,
    priority,
  });
  await newTodo.save();
  return {
    status: "succesful",
    message: "Succesfully created new todo item.",
    todo: newTodo
  };
};