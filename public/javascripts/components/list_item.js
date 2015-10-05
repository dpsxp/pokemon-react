import React from 'react';
import { Link } from 'react-router';

import PokemonModel from '../models/pokemon';

import Lazy from './lazy';
import ImageItem from './image_item.js';

const ListItem = React.createClass({
  render() {
    var pokemon = new PokemonModel(this.props.pokemon);

    /* jshint ignore:start */
    return(
        <div className="mdl-card mdl-shadow--8dp mdl-card--border">
          <div className="mdl-card__title mdl-card--expand">
            <Lazy>
              <ImageItem src={pokemon.thumbUrl()} />
            </Lazy>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <Link className="mdl-button mdl-button--colored" to={`/pokemon/${pokemon.id}`}>
              { pokemon.name }
            </Link>
          </div>
        </div>
    );
    /* jshint ignore:end */
  }
});

export default ListItem;
