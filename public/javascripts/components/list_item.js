import React from 'react';
import { Link } from 'react-router';

const ListItem = React.createClass({
  render() {
    var pokemon = this.props.pokemon;
    /* jshint ignore:start */
    return(
      <li className="list_item">
        <Link to={`/pokemon/${pokemon.id}`}>
          <h3>{pokemon.name}</h3>
        </Link>
      </li>
    );
    /* jshint ignore:end */
  }
});

export default ListItem;
