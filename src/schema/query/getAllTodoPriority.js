import { Todo } from "../../models/Todo"

// Handler function for getting all todo item priorities
export const getAllTodoPriority = async() => {
  return await Todo.distinct('priority');
}