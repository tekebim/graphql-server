const {buildSchema} = require('graphql')
// buildSchema va nous permettre de déclarer notre schema au sein de graphQL

const Schema = buildSchema(`
  type Query {
    movies: [Movie!]!
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
  
`);

// Un Input avec graphQL permettra de faire passer plusieurs données en une seule via un objet javascript.
