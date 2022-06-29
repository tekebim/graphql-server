const MovieModel = require('../../models/movie')
// On importe le modèle créé à partir de mongoose.
// Cela nous permettra d'avoir accès à un ensemble de méthode facilitant les communications avec mongodb

const Resolvers = {
  movies: async () => {
    try {
      const listMovie = await MovieModel.find();
      // find() va récupérer l'entièreté de ce qui correspond au modèle (tous les films). Entre parenthèses on va pouvoir préciser des conditions

      return listMovie.map(movie => {
        return {
          _id: movie.id,
          ...movie._doc,
          createdAt: new Date(movie._doc.createdAt).toISOString()
        }
      });
    } catch (error) {
      throw error
    }
  },
  createMovie: async (args) => {
    // destructuring variables
    // const {title, plot} = args.MovieInput;

    const movie = new MovieModel({
      title: args.movie.title,
      plot: args.movie.plot
    });

    // Attention, lorsque l'on passe un input en tant que paramètre, il faudra d'abord accéder à l'input avant d'accéder aux champs qu'il contient.
    const newMovie = await movie.save();
    // On sauvegarde l'instance de MovieModel en base de données.

    return {
      _id: newMovie.id,
      ...newMovie._doc
    }
    // On retourne un objet contenant l'id et les données telles que le titre, le plot
  }
}

// Avec express-graphql, on ne précise pas Query et Mutation dans le resolvers (graphQL, viendra les valider à partir du schéma)
module.exports = Resolvers;
