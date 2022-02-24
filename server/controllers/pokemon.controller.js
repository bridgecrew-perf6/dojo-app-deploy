const Pokemon = require("../models/pokemon.model");

function listAllPokemon(req, res) {
  Pokemon.find()
    .then(pokemon => res.json(pokemon))
    .catch(res => res.json("API Error"));
}

function createPokemon(req, res) {
  const { name, type } = req.body;
  Pokemon.create({ name, type })
    .then(pokemon => res.json(pokemon))
    .catch(res => res.json("API Error"));
}

module.exports = {
  listAllPokemon,
  createPokemon
};
