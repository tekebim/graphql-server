const {buildSchema} = require('graphql')
// buildSchema va nous permettre de déclarer notre schema au sein de graphQL

const Schema = buildSchema(`
  type Query {
    movies(page:Int): [Movie!]!
  }
  
  type Mutation {
    createMovie(movie: MovieInput): Movie
  }
  
  input MovieInput {
    title: String!,
    plot: String!
  }
  
  type Movie {
    _id: ID!,
    title: String!,
    plot: String!,
    createdAt: String!
  }
  
  schema {
    query: Query,
    mutation: Mutation
  }
`);

// Un Input avec graphQL permettra de faire passer plusieurs données en une seule via un objet javascript.


module.exports = Schema;
