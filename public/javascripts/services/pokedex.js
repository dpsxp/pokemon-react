import BaseService from './base';
import { partialRight, defaults } from 'lodash';
import { pokemonFactory } from '../models/pokemon';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(cache = true) {
    return BaseService.get.call(this, '', cache)
      .then( ({ pokemon }) => pokemon.map(pokemonFactory) );
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
