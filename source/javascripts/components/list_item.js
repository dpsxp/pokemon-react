import React from 'react';
import { Link } from 'react-router';
import PokemonModel from '../models/pokemon';
import { Lazy, ImageItem } from '../components';

const ListItem = ({ pokemon }) => {
  var model = new PokemonModel(pokemon);

  /* jshint ignore:start */
  return(
      <div className="pokemon-item-js mdl-card mdl-shadow--8dp mdl-card--border">
        <div className="mdl-card__title mdl-card--expand">
          <Lazy>
            <Link to={`/pokemon/${model.id}`}>
              <ImageItem src={model.thumbUrl()} />
            </Link>
          </Lazy>
        </div>

        <div className="mdl-card__actions mdl-card--border">
          <Link className="mdl-button mdl-button--colored" to={`/pokemon/${model.id}`}>
            { model.name }
          </Link>
        </div>
      </div>
  );
  /* jshint ignore:end */
};

export default ListItem;
