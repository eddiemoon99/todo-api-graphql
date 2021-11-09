import { Todo } from "../../models/Todo"

// Handler function for getting all todo items belonging to a specific user
export const getAllTodoByUsername = async(_, {username}) => {
  return await Todo.find({username: username});
}