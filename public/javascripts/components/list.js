/* jshint esnext: true */
import React from 'react';
import PokedexService from '../services/pokedex';
import ListItem from './list_item';
import LoadingScreen from './loading_screen';
import Lazy from './lazy';
import Spinner from './spinner';

const List = React.createClass({
  getInitialState() {
    return { pokemons: [], page: 0, finished: false };
  },

  getDefaultProps() {
    return { limit: 20 };
  },

  loadPokemons() {
    var page = this.state.page,
        limit = this.props.limit,
        oldData = this.state.pokemons;

    PokedexService.get(page, limit)
      .then(({ pokemons, total }) => {
        let newData = oldData.concat(pokemons);

        this.setState({
          pokemons: newData,
          page: page + 1,
          finished: newData.length === total
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
