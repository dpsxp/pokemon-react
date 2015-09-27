import React from 'react';

const ListItem = React.createClass({
  getId() {
    var pokemon = this.props.pokemon;
    var id = pokemon.resource_uri.match(/\/\d+/)[0];
    return id;
  },

  render() {
    var pokemon = this.props.pokemon;
    /* jshint ignore:start */
    return(
      <li className="list_item">
        <a href={"#/pokemon" + this.getId()}>
          <h3>{pokemon.name}</h3>
        </a>
      </li>
    );
    /* jshint ignore:end */
  }
});

export default ListItem;
