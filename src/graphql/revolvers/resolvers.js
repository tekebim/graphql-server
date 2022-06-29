const MovieModel = require('../../models/movie')
// On importe le modèle créé à partir de mongoose.
// Cela nous permettra d'avoir accès à un ensemble de méthode facilitant les communications avec mongodb

const Resolvers = {
  movies: async () => {
    try {
      const listMovie = await MovieModel.find();
      // find() va récupérer l'entièreté de ce qui correspond au modèle (tous les films). Entre parenthèses on va pouvoir préciser des conditions

      // A ... terminer
    } catch (error) {
      throw error
    }
  }
}
