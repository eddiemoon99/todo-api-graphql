import { Todo } from "../../models/Todo"

// Handler function for getting all todo items belonging to specific category
export const getAllTodoByCategory = async(_, {category}) => {
  return await Todo.find({category: category});
}