import { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import axios from "axios";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/pokemon")
      .then(res => setAllPokemon(res.data))
      .catch(e => alert(e));
  }, []);

  const onFormSubmit = pokemon => {
    setAllPokemon([...allPokemon, pokemon]);
  }

  return (
    <div className="container">
      <h1>My Pokemon app</h1>
      <Form onFormSubmit={onFormSubmit} />
      <hr />
      <List pokemonList={allPokemon} />
    </div>
  );
}

export default App;
