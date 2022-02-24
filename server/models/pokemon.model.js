const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
	name: {
    type: String
  },
  type: {
    type: String
  }
}, {
  timestamps: true
});

const Pokemon = mongoose.model("Pokemon", PokemonSchema);

module.exports = Pokemon;
