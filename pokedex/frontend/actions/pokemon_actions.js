import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon: pokemon
  };
};

export const receivePokemon = (payload) => {
  return {
    type: RECEIVE_POKEMON,
    payload
  };
};

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon() //dispatch is not an function?
    .then((pokemon) => dispatch(receiveAllPokemon(pokemon)));
};

export const requestPokemon = (pokemonId) => (dispatch) => {
  // debugger;
  return APIUtil.fetchPokemon(pokemonId)
  .then((payload) => dispatch(receivePokemon(payload)));
};
