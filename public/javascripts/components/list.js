/* jshint esnext: true */
import React from 'react';
import Item from './item';

const List = React.createClass({
  render() {
    /* jshint ignore:start */
    var pokemons = this.props.pokemons;
    return(
      <div>
        {
          pokemons.map(function(pokemon) {
            return <Item pokemon={pokemon} />
          })
        }
      </div>
    );
    /* jshint ignore:end */
  }
});

export default List;
