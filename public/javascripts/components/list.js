/* jshint esnext: true */
import React from 'react';
import PokedexService from '../services/pokedex';
import ListItem from './list_item';

const List = React.createClass({
  getInitialState() {
    return { pokemons: [] };
  },

  getPokemons() {
   return PokedexService.get();
  },

  componentDidMount() {
    var _this = this;

    this.getPokemons()
      .then((pokemons) => _this.setState({ pokemons: pokemons }));
  },

  render() {
    /* jshint ignore:start */
    var pokemons = this.state.pokemons;

    return(
      <div>
        {
          pokemons.map(function(pokemon) {
            return <ListItem pokemon={pokemon} />
          })
        }
      </div>
    );
    /* jshint ignore:end */
  }
});

export default List;
