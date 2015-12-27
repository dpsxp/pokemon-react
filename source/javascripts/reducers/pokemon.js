import PokemonSerive from '../services/pokemon';
import PokemonModel from '../models/pokemon';

const initialState = {
  pokemon: new PokemonModel(),
  loaded: false,
  comments: []
}

const pokemon = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'pokemon/load':
      return Object.assign({}, state, { pokemon: PokemonSerive.get(action.id) });

    case 'pokemon/loaded':
      return Object.assign({}, state, { loaded: true, pokemon: action.pokemon });

    default:
      return state;
  }
}

export default pokemon;
