import PokemonModel from '../models/pokemon';

const PokemonActions = {
  LOADED: {
    type: 'pokemon/loaded',
    pokemon: PokemonModel
  }
};

export default  PokemonActions;
