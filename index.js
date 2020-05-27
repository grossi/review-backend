import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import model from './model';
import { typeDefs, resolvers } from './schema';
import _ from './db';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => { return { model } }
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
