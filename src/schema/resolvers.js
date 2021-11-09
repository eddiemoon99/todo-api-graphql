import { createUser } from "./mutation/createUser";
import { getAllUsers } from "./query/getAllUsers";
import { getUserByUsername } from "./query/getUserByUsername";
import { updateUser } from "./mutation/updateUser";
import { deleteUser } from "./mutation/deleteUser";
import { login } from "./query/login"
import { createTodo } from "./mutation/createTodo";
import { updateTodo } from "./mutation/updateTodo";
import { deleteTodo } from "./mutation/deleteTodo";
import { getAllTodo } from "./query/getAllTodo";
import { getAllTodoByUsername } from "./query/getAllTodoByUsername";
import { getAllTodoByCategory } from "./query/getAllTodoByCategory";
import { getAllTodoByPriority } from "./query/getAllTodoByPriority";
import { getAllTodoCategory } from "./query/getAllTodoCategory";
import { getAllTodoPriority } from "./query/getAllTodoPriority";

// mapping between the route to the handler functions
export const resolvers = {
  Query: {
    login: login,
    getAllUsers: getAllUsers,
    getUserByUsername: getUserByUsername,
    getAllTodo: getAllTodo,
    getAllTodoByUsername: getAllTodoByUsername,
    getAllTodoByCategory: getAllTodoByCategory,
    getAllTodoByPriority: getAllTodoByPriority,
    getAllTodoCategory: getAllTodoCategory,
    getAllTodoPriority: getAllTodoPriority
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
  }
};
