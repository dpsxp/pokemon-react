// Libs
import { ReduceStore } from 'flux/utils';

import dispatcher from '../dispatcher';

// Services
import PokedexService from '../services/pokedex';

class PokedexStore extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);

    this._state = this.getInitialState();
  }

  getInitialState() {
    return { pokemons: [], page: 0, finished: false };
  }

  getState() {
    return this._state;
  }

  reduce(state, action) {
    switch(action.type) {
      case 'pokedex/fetched':
        var newPokemons = state.pokemons.concat(action.pokemons);

        return {
          pokemons: newPokemons,
          page: state.page + 1,
          finished: newPokemons.length === action.total
        };

      default:
        return state;
    }
  }

  loadData(limit = 50) {
    PokedexService.get(this.getState().page, limit);
  }
}

const instance = new PokedexStore(dispatcher);
export default instance;
