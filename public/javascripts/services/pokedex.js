import BaseService from './base';
import { partialRight, get, defaults } from 'lodash';
import { pokemonFactory } from '../models/pokemon';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(cache = true) {
    return BaseService.get.call(this, '', cache)
      .then(partialRight(get, 'pokemon'))
      .then( pokemons => pokemons.map(pokemonFactory) );
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
