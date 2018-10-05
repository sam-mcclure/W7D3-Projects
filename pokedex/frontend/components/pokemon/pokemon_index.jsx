import React from 'react';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger;
    const PokemonIndexItems = Object.values(this.props.pokemon)
      .map((pokemon, idx) => (
        <PokemonIndexItem key={idx} pokemon={pokemon}/>
      ));
    return(
      <div className="poke-index">
        <ul>
          {PokemonIndexItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
