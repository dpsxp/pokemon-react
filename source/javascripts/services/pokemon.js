import { defaults } from 'lodash';
import BaseService from './base';
import { pokemonFactory } from '../models/pokemon';
import PokemonActions from '../actions/pokemon_actions';
import store from '../stores/store.js';

var PokemonService = {
  BASE_URL: BaseService.BASE_URL + '/pokemon',

  get(id, cache = true) {
    var path = this.BASE_URL + '/' + id;
    return BaseService.get(path, cache)
      .then(pokemonFactory)
      .then((pokemon) => {
        var action = PokemonActions.LOADED;
        action.pokemon = pokemon;

        store.dispatch(action);

        return pokemon;
      });
  }
};

defaults(PokemonService, BaseService);

export default PokemonService;
