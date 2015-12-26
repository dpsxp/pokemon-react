import PokemonSerive from '../services/pokemon';

const pokemon = (state = {}, action) => {
  switch(action.type) {
    case 'pokemon/load':
      return Object.assign({}, state, { pokemon: PokemonSerive.get(action.id) });

    case 'pokemon/loaded':
      return Object.assign({}, state, { pokemon: action.pokemon });

    default:
      return state;
  }
}

export default pokemon;
