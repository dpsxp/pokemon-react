import BaseService from './base';
import { partialRight, get, defaults, partial } from 'lodash';
import { pokemonFactory } from '../models/pokemon';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(cache = true) {
    var url = this.BASE_URL,
        _this = this;

    return new Promise(partial(_this.doRequest, url, cache))
      .then(partialRight(get, 'pokemon'))
      .then( pokemons => pokemons.map(pokemonFactory) );
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
