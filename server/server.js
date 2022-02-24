const express = require("express");
const cors = require("cors");
const {listAllPokemon, createPokemon} = require("./controllers/pokemon.controller");

const app = express();

require("./config/mongoose.config");

app.use( cors() )
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/pokemon", listAllPokemon);
app.post("/api/pokemon", createPokemon);

app.listen(3001, () => {
  console.log("Application listening in port 3001");
})
