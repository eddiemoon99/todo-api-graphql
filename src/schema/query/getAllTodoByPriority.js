import { Todo } from "../../models/Todo"

// Handler function for getting all todo items belonging to specific priority
export const getAllTodoByPriority = async(_, {priority}) => {
  return await Todo.find({priority: priority});
}