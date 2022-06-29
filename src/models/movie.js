const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieModel = new Schema({
  title: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// La classe Schema de mongoose nous permet de créer un schema représentant les données qui pourront êtres mises en base de données.
// L'avantage principal est d'adapter les données de l'API à mongoDB
