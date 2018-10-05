export const fetchAllPokemon = () => {
  return $.ajax({
    url: 'api/pokemon',
    method: 'GET'
  });
};

export const fetchPokemon = (pokemonId) => {
  // debugger;
  return $.ajax({
    url: `api/pokemon/${pokemonId}`,
    method: 'GET'
  });
};
