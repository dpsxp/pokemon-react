// Libs
import { ReduceStore } from 'flux/utils';

// Stores
import dispatcher from '../dispatcher';

// Models
import PokemonModel from '../models/pokemon';

// Services
import PokemonService from '../services/pokemon';

class PokemonStore extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);

    this._state = this.getInitialState();
  }

  getInitialState() {
    return new PokemonModel();
  }

  getState() {
    return this._state;
  }

  reduce(state, action) {
    switch(action.type) {
      case 'pokemon/loaded':
        return action.pokemon;

      default:
        return state;
    }
  }

  loadData(id) {
    PokemonService.get(id);
  }
}

const instance = new PokemonStore(dispatcher);
export default instance;
