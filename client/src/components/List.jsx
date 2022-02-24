import React from "react"

const List = ({pokemonList}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
        </tr>
      </thead>
      <tbody>
        {
          pokemonList?.map(pokemon => (
            <tr key={pokemon._id}>
              <th scope="row">{pokemon._id}</th>
              <td>{pokemon.name}</td>
              <td>{pokemon.type}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  );
};

export default List;
