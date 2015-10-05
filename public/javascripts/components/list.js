/* jshint esnext: true */
import React from 'react';
import PokedexService from '../services/pokedex';
import ListItem from './list_item';
import LoadingScreen from './loading_screen';
import Lazy from './lazy';
import Spinner from './spinner';
import { flatten } from 'lodash';

const List = React.createClass({
  getInitialState() {
    return { pokemons: [], page: 0 };
  },

  loadPokemons() {

    PokedexService.get()
      .then((pokemons) => {
        var page = this.state.page,
            oldData = this.state.pokemons,
            offset = page * 50,
            limit = (page * 50) + 50;

        this.setState({
          pokemons: flatten(oldData.concat(pokemons.slice(offset, limit))),
          page: page + 1,
          loaded: true,
          finished: offset >= pokemons.length
        });
      });
  },

  componentDidMount() {
    this.loadPokemons();
  },

  render() {
    /* jshint ignore:start */
    var pokemons = this.state.pokemons,
        lazy = '';

    if (!this.state.loaded) {
      return <LoadingScreen />
    }

    if (!this.state.finished) {
      lazy = (
        <div className="load-more">
          <Spinner />
          <Lazy onReady={ this.loadPokemons } />
        </div>
      );
    }

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
        { lazy }
      </div>
    );
    /* jshint ignore:end */
  }
});

export default List;
