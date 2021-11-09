import { ApolloServer, AuthenticationError } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/typeDefs";
import { getUser } from "./util/getUser";

const app = express();
const PORT = 4000;

// create a new ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({req}) => {
    const user = await getUser(req.headers["username"], req.headers["password"]);
    return {user};
  }
});

server.applyMiddleware({ app });

// connect to db
const dbURI = "mongodb+srv://eddiemoon:123Mongo@todoapp.bhjvv.mongodb.net/todo-app?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

// start server and listen on port 4000
app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
