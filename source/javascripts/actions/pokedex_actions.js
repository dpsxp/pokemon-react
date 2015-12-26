import React from 'react';
import PokemonModel from '../models/pokemon';

const PokedexActions = {
  LOAD: {
    type: 'pokedex/load',
    page: React.PropTypes.number,
    limit: 50
  },
  LOADED: {
    type: 'pokedex/loaded',
    pokemons: React.PropTypes.arrayOf(React.PropTypes.instanceOf(PokemonModel)),
    total: React.PropTypes.number
  }
};

export default  PokedexActions;
