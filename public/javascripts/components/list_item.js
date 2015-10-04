import React from 'react';
import { Link } from 'react-router';

const ListItem = React.createClass({
  render() {
    var pokemon = this.props.pokemon;
    /* jshint ignore:start */
    return(
      <div>
        <Link to={`/pokemon/${pokemon.id}`}>
          <h3>{pokemon.name}</h3>
        </Link>
      </div>
    );
    /* jshint ignore:end */
  }
});

export default ListItem;
