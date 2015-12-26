import PokemonModel from '../models/pokemon';
import React from 'react';

const PokemonActions = {
  LOADED: {
    type: 'pokemon/loaded',
    pokemon: React.PropTypes.instanceOf(PokemonModel)
  },
  LOAD: {
    type: 'pokemon/load',
    id: React.PropTypes.number
  }
};

export default  PokemonActions;
