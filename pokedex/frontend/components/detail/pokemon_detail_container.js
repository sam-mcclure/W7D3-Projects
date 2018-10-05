import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  return {
    pokemon: state.entities.pokemon,
    items: state.entities.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPokemon: (pokemonId) => dispatch(requestPokemon(pokemonId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
