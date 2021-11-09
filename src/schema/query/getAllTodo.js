import { Todo } from "../../models/Todo"

// Handler function for getting all todo items
export const getAllTodo = async() => {
  return await Todo.find();
}