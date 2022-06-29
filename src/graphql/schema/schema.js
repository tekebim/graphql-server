const {buildSchema} = require('graphql')
// buildSchema va nous permettre de déclarer notre schema au sein de graphQL

const Schema = buildSchema(`
  type Movie {
    _id: ID!,
    title: String!,
    plot: String!,
    createdAt: String!
  }
`);
