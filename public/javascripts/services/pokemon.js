import { get, defaults, partial, partialRight } from 'lodash';
import BaseService from './base';
import { pokemonFactory } from '../models/pokemon';

var PokemonService = {
  BASE_URL: BaseService.BASE_URL + '/pokemon',

  get(id, cache = true) {
    var path = this.BASE_URL + '/' + id;

    return new Promise(partial(this.doRequest, path, cache))
      .then(pokemonFactory)
      .then( pokemon => {
        pokemon.evolutions = pokemon.evolutions.map(pokemonFactory);
        return pokemon;
      });
  }
};

defaults(PokemonService, BaseService);

export default PokemonService;
