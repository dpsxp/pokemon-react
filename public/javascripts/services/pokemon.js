import { defaults } from 'lodash';
import BaseService from './base';
import { pokemonFactory } from '../models/pokemon';

var PokemonService = {
  BASE_URL: BaseService.BASE_URL + '/pokemon',

  get(id, cache = true) {
    var path = this.BASE_URL + '/' + id;
    return BaseService.get(path, cache).then(pokemonFactory);
  }
};

defaults(PokemonService, BaseService);

export default PokemonService;
