import { Todo } from "../../models/Todo"

// Handler function for getting all todo item categories
export const getAllTodoCategory = async() => {
  return await Todo.distinct('category');
}