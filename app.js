const express = require('express');
const {graphqlHTTP} = require('express-graphql'); // graphqlHTTP va nous permettre d'assembler le resolver et le schema. On aura des options supplémentaires telles que graphiQL
const mongoose = require('mongoose');
const graphqlSchema = require('./src/graphql/schema/schema');
const graphqlResolvers = require('./src/graphql/revolvers/resolvers');

const app = express();

app.use(
  "/movie",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);
