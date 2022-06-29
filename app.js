const express = require('express');
const {graphqlHTTP} = require('express-graphql'); // graphqlHTTP va nous permettre d'assembler le resolver et le schema. On aura des options supplémentaires telles que graphiQL
const mongoose = require('mongoose');
const graphqlSchema = require('./src/graphql/schema/schema');
const graphqlResolvers = require('./src/graphql/revolvers/resolvers');
const dotenv = require('dotenv').config();

const app = express();

app.use(
  "/movie",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.hlculcl.mongodb.net/?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(uri, options)
  .then(() => app.listen(process.env.PORT, console.log('server ok!')))
  .catch(error => {
    throw error
  });
