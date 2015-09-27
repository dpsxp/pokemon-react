/* jshint esnext: true */
import React from 'react';

const Item = React.createClass({
  render() {
    var pokemon = this.props.pokemon;
    /* jshint ignore:start */
    return <h2>{pokemon.name}</h2>;
    /* jshint ignore:end */
  }
});

export default Item;
