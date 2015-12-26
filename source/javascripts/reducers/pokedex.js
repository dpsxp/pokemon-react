import PokedexService from '../services/pokedex';

let initialState = {
  pokemons: [],
  page: 0,
  limit: 30
}

const pokedex = (state = initialState, action) => {
  switch(action.type) {
    case 'pokedex/load':
      return Object.assign({}, state, {
        pokedex: PokedexService.get(action.page, action.limit)
      });

    case 'pokedex/loaded':
      var pokemons = state.pokemons.concat(action.pokemons);

      return Object.assign({}, state, {
        pokemons: pokemons,
        page: action.page,
        total: action.total,
        finished: pokemons.length === action.total
      });

    default:
      return state;
  }
}

export default pokedex;

