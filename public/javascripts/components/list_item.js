import React from 'react';

const ListItem = React.createClass({
  render() {
    var pokemon = this.props.pokemon;
    /* jshint ignore:start */
    return(
      <li className="list_item">
        <a href="#/pokemon/19">
          <h2>{pokemon.name}</h2>
        </a>
      </li>
    );
    /* jshint ignore:end */
  }
});

export default ListItem;
