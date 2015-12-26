/* jshint esnext: true */
import React from 'react';
import ListItem from './list_item';
import Lazy from './lazy';
import Spinner from './spinner';
import { connect } from 'react-redux';

var mapStateToProps = (state) => {
  return state.pokedex;
}

var mapDispatch = (dispatch) => {
  return {
    loadMore: (page, limit) => {
      return function() {
        dispatch({
          type: 'pokedex/load',
          page: page,
          limit: limit
        });
      }
    }
  }
}

var component = (props) => {
  /* jshint ignore:start */
  var pokemons = props.pokemons,
      lazy     = '';

  if (!props.finished) {
    lazy = (
      <div className="load-more load-more-js">
        <Spinner />
        <Lazy onReady={ props.loadMore(props.page + 1, props.limit) } />
      </div>
    );
  }

  return(
    <div className="mdl-grid pokedex-list-js">
      {
        pokemons.map((pokemon) => {
          return (
            <div className="mdl-cell mdl-cell--4-col">
              <ListItem key={ pokemon.id } pokemon={ pokemon } />
            </div>
          );
        })
      }
      { lazy }
    </div>
  );
  /* jshint ignore:end */
}

export default connect(mapStateToProps, mapDispatch)(component);
