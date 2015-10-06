/* jshint esnext: true */
import React from 'react';
import ListItem from './list_item';
import LoadingScreen from './loading_screen';
import Lazy from './lazy';
import Spinner from './spinner';
import PokedexStore, { dispatcher } from '../stores/pokedex';

const List = React.createClass({
  getInitialState() {
    return PokedexStore.getState();
  },

  getDefaultProps() {
    return { limit: 20 };
  },

  _onLoad() {
    this.setState(PokedexStore.getState());
  },

  _loadMore() {
    PokedexStore.loadData(this.props.limit);
  },

  componentWillMount() {
    PokedexStore.addListener(this._onLoad);
  },

  render() {
    /* jshint ignore:start */
    var pokemons = this.state.pokemons, lazy = '';

    if (!this.state.finished) {
      lazy = (
        <div className="load-more">
          <Spinner />
          <Lazy onReady={ this._loadMore } />
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
