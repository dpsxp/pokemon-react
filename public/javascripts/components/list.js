/* jshint esnext: true */
import React from 'react';
import PokedexService from '../services/pokedex';
import ListItem from './list_item';

const List = React.createClass({
  getInitialState() {
    return { pokemons: [] };
  },

  loadPokemons() {
    PokedexService.get()
      .then((pokemons) => this.setState({ pokemons: pokemons }));
  },

  componentDidMount() {
    this.loadPokemons();
  },

  render() {
    /* jshint ignore:start */
    var pokemons = this.state.pokemons;

    return(
      <div className="mdl-grid">
        {
          pokemons.map(function(pokemon) {
            return (
              <div className="mdl-cell mdl-cell--4-col">
                <ListItem pokemon={pokemon} />
              </div>
            );
          })
        }
      </div>
    );
    /* jshint ignore:end */
  }
});

export default List;
