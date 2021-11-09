import { gql } from "apollo-server-express";

// declaration of all typeDefs and API routes
export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    password: String!
  }

  type Todo {
    id: ID!
    username: String!
    description: String!
    category: String!
    priority: String!
  }

  type UserActionResponse {
    status: String!
    message: String!
    user: User
  }

  type LoginResponse {
    message: String!
  }

  type TodoActionResponse {
    status: String!
    message: String!
  }

  type Query {
    login(username: String!, password: String!): LoginResponse
    getAllUsers: [User]
    getUserByUsername(username: String!): User
    getAllTodo: [Todo]
    getAllTodoByUsername(username: String!): [Todo]
    getAllTodoByCategory(category: String!): [Todo]
    getAllTodoByPriority(priority: String!): [Todo]
    getAllTodoCategory: [String]
    getAllTodoPriority: [String]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, username: String!, password: String!): UserActionResponse
    updateUser(firstName: String!, lastName: String!, username: String!, password: String!): UserActionResponse
    deleteUser(username: String!, password: String!): UserActionResponse
    createTodo(username: String!, description: String!, category: String!, priority: String!): TodoActionResponse
    updateTodo(username: String!, password: String!, todoId: ID!, description: String!, category: String!, priority: String!): TodoActionResponse,
    deleteTodo(username: String!, password: String!, todoId: ID!): TodoActionResponse
  }
`;
