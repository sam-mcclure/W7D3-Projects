import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  componentDidMount() {
    let pokemonId = this.props.match.params.id;
    this.props.requestPokemon(pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id != newProps.match.params.id){
      this.props.requestPokemon(newProps.match.params.id);
    }
  }

  render() {
    if (Object.values(this.props.pokemon).length === 0) {
      return 'loading...';
    }
    const pokeId = this.props.match.params.id;
    const pokemon = this.props.pokemon[pokeId];
    const items = this.props.items;
    const pokeMoves = pokemon.moves.join(', ');

    let itemIds = Object.keys(items);

    let pokemonItems = itemIds.map((itemId) => {
      let item = items[itemId];

      return (
        <div>
          <li><img className="pokemon-img" src={item.image_url}/></li>
        </div>
      );
    });

    return (
      <div className="poke-details">
        <ul>
          <figure>
            <img className="large-poke-image" src={pokemon.image_url}/>
          </figure>
          <li><h1>{pokemon.name}</h1></li>
          <li>Type: {pokemon.type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokeMoves}</li>
        </ul>

        <ul>
          <li><h1>Items</h1></li>
          {pokemonItems}
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </ul>

      </div>
    );

  }
}

export default PokemonDetail;
