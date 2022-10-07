# Todo List GraphQL API

This repo contains the source code for an example CRUD API for a todo list application. This API was created using the following:
* Node.js
* GraphQL
* MongoDB
* Apollo Server

## Table of Contents
* [Development Setup](#development-setup)
* [Project Structure](#project-structure)
* [Queries](#queries)
  * [Create User](#create-user)
  * [Get All Users](#get-all-users)
  * [Get User by Username](#get-user-by-username)
  * [Delete User](#delete-user)
  * [Login](#login)
  * [Create Todo](#create-todo)
  * [Get All Todo](#get-all-todo)
  * [Update Todo](#update-todo)
  * [Get All Todo By Username](#get-all-todo-by-username)
  * [Get All Todo By Category](#get-all-todo-by-category)
  * [Get All Todo By Priority](#get-all-todo-by-priority)
  * [Get All Todo Categories](#get-all-todo-categories)
  * [Get All Todo Priorities](#get-all-todo-priorities)
  * [Delete Todo](#delete-todo)

## Development Setup
1. Clone this repository onto your local machine
2. Open up the project using your preferred code editor
3. Install the required dependencies for this project
```
yarn install
```
4. Start up the server
```
yarn start
```
5. Open up your browser and go to the following url
```
http://localhost:4000/graphql
```

## Project Structure
```
.                
├── node_modules                             
├── src
│    ├── models
│    ├── schema 
│    │     ├── mutation 
│    │     └── query
│    └── util          
├── index.js                        
├── package.json
```

```
| File Directory         | Description                                                                                |
|------------------------|--------------------------------------------------------------------------------------------|
| `node_modules`         | Automatically generated when doing `yarn install` to install packages used in this project |
| `/src/models`          | Contains all the mongoose schema definitions                                               |
| `/src/schema`          | Contains the resolvers and type definitions used for GraphQL                               |
| `/src/schema/mutation` | Contains all the functions for the GraphQL mutation APIs                                   |
| `/src/schema/query`    | Contains all the functions for the GraphQL query APIs                                      |
| `/src/util`            | Contains all the functions for common utility functions                                    |
| `index.js`             | The entry point                                                                            |
| `package.json`         | Holds project metadata and used for managing the project's dependencies                    |
```

## Queries

### Create User
#### Example request
```
mutation {
  createUser(firstName: "john", lastName: "smith", username: "johnsmith", password:"password123"){
    status
    message
    user {
      id
      firstName
      lastName 
    }
  }
}
```
#### Example response
```
{
  "data": {
    "createUser": {
      "status": "succesful",
      "message": "Succesfully created new user.",
      "user": {
        "id": "618a4598972da0e8686ae8c4",
        "firstName": "john",
        "lastName": "smith"
      }
    }
  }
}
```

### Get All Users
#### Example request
```
{
  getAllUsers {
    id
    firstName
    lastName
    username
    password
  }
}

```

#### Example response
```
{
  "data": {
    "getAllUsers": [
      {
        "id": "618a4540972da0e8686ae89b",
        "firstName": "eddie",
        "lastName": "moon",
        "username": "eddiemoon",
        "password": "password123"
      },
      {
        "id": "618a4598972da0e8686ae8c4",
        "firstName": "john",
        "lastName": "smith",
        "username": "johnsmith",
        "password": "password"
      }
    ]
  }
}
```

### Get User by Username
#### Example request
```
{
  getUserByUsername(username: "johnsmith") {
    firstName
    lastName
  	username
    password 
  }
}
```
#### Example response
```
{
  "data": {
    "getUserByUsername": {
      "firstName": "john",
      "lastName": "smith",
      "username": "johnsmith",
      "password": "password123"
    }
  }
}
```

### Delete User
This API uses the header for authentication. To delete a certian user, the correct username and password must be supplied in the header. Otherwise, permission will be denied. 

#### Example request
Header:
```
{
  "username": "eddiemoon",
  "password": "password123"
}
```
GraphQL Query:
```
mutation {
  deleteUser(
    username: "eddiemoon",
    password: "password123"
  ){
    status
    message 
  }
}
```
#### Example response
```
{
  "data": {
    "deleteUser": {
      "status": "succesful",
      "message": "Succesfully deleted user."
    }
  }
}
```

### Login
This is a simple endpoint for login that verfies username and password pair exist. For real authentication, JSON Web Tokens would be used. 

#### Example request
```
{
  login(username: "johnsmith", password: "password"){
    message
  }
}
```
#### Example response
```
{
  "data": {
    "login": {
      "message": "Logged in successfully!"
    }
  }
}
```

### Create Todo
#### Example request
```
mutation {
  createTodo(
    username: "eddiemoon", 
    description: "finish convergence assignment",
    category: "job",
    priority: "high"
  ) {
    status
    message
  }
}
```
#### Example response
```
{
  "data": {
    "createTodo": {
      "status": "succesful",
      "message": "Succesfully created new todo item."
    }
  }
}
```

### Get All Todo
#### Example request
```
{
  getAllTodo{
    id
    username
    description
    category
    priority
  }
}
```
#### Example response
```
{
  "data": {
    "getAllTodo": [
      {
        "id": "618a5202f1c430b47f2835b4",
        "username": "johnsmith",
        "description": "finish convergence assignment",
        "category": "job",
        "priority": "high"
      },
      {
        "id": "618a5213f1c430b47f2835c1",
        "username": "johnsmith",
        "description": "finish math project",
        "category": "school",
        "priority": "low"
      },
      {
        "id": "618a5221f1c430b47f2835ca",
        "username": "johnsmith",
        "description": "study for cs exam",
        "category": "school",
        "priority": "medium"
      }
    ]
  }
}
```

### Update Todo
Only the user who created the Todo can update the todo. To ensure this, the user credentials must be passed in the header for authentication. The `todoId` field can be found by calling the `getAllTodo` route. 

#### Example request
Header:
```
{
  "username": "johnsmith",
  "password": "password"
}
```
Query:
```
mutation {
  updateTodo(
    username: "johnsmith",
    password: "password",
    todoId: "618a5213f1c430b47f2835c1",
    description: "finish drama project",
    category: "school",
    priority: "high"
  ){
    status 
    message 
  }
}
```
#### Example response
```
{
  "data": {
    "updateTodo": {
      "status": "succesful",
      "message": "Succesfully updated todo item."
    }
  }
}
```

### Get All Todo By Username
Returns a list of all todo items belonging to a specific user.
#### Example request
```
{
  getAllTodoByUsername(username: "johnsmith"){
    username
    description
    category
    priority
  }
}
```
#### Example response
```
{
  "data": {
    "getAllTodoByUsername": [
      {
        "username": "johnsmith",
        "description": "finish convergence assignment",
        "category": "job",
        "priority": "high"
      },
      {
        "username": "johnsmith",
        "description": "finish math project",
        "category": "school",
        "priority": "low"
      },
      {
        "username": "johnsmith",
        "description": "study for cs exam",
        "category": "school",
        "priority": "medium"
      }
    ]
  }
}
```

### Get All Todo By Category
Return a list of todo items belonging to a specific category.
#### Example request
```
{
  getAllTodoByCategory(category: "school"){
    username
    description
    category
    priority
  }
}
```
#### Example response
```
{
  "data": {
    "getAllTodoByCategory": [
      {
        "username": "johnsmith",
        "description": "finish math project",
        "category": "school",
        "priority": "low"
      },
      {
        "username": "johnsmith",
        "description": "study for cs exam",
        "category": "school",
        "priority": "medium"
      }
    ]
  }
}
```

### Get All Todo By Priority
Returns a list of all todo items with the specified priority. 
#### Example request
```
{
  getAllTodoByPriority(priority: "high"){
    username
    description
    category
    priority
  }
}
```
#### Example response
```
{
  "data": {
    "getAllTodoByPriority": [
      {
        "username": "johnsmith",
        "description": "finish convergence assignment",
        "category": "job",
        "priority": "high"
      }
    ]
  }
}
```

### Get All Todo Categories
Returns a list of categories defined for todo items.
#### Example request
```
{
  getAllTodoCategory
}
```
#### Example response
```
{
  "data": {
    "getAllTodoCategory": [
      "job",
      "school"
    ]
  }
}
```

### Get All Todo Priorities
Returns a list of different priorties defined for todo items.
#### Example request
```
{
  getAllTodoPriority
}
```
#### Example response
```
{
  "data": {
    "getAllTodoPriority": [
      "high",
      "low",
      "medium"
    ]
  }
}
```

### Delete Todo
This will delete a todo item based on the `todoId`. The credentials of the user who created the todo item must be passed into the header.

#### Example request:
Header:
```
{
  "username": "johnsmith",
  "password": "password"
}
```
Query:
```
mutation {
  deleteTodo(
    username: "johnsmith",
    password: "password",
  	todoId: "618a5202f1c430b47f2835b4"
  ){
    status
    message
  }
}
```

### Example response:
```
{
  "data": {
    "deleteTodo": {
      "status": "succesful",
      "message": "Succesfully deleted todo item."
    }
  }
}
```
