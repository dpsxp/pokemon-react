import BaseService from './base';
import { partialRight, defaults } from 'lodash';
import { pokemonFactory } from '../models/pokemon';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(page = 0, offset = 50, cache = true) {
    var start = page * offset,
        end = (page * offset) + offset;

    return BaseService
      .get.call(this, '', cache)
      .then( ({ pokemon }) => {
        var pokemons = pokemon
          .slice(start, end)
          .map(pokemonFactory);
        return { pokemons: pokemons, finished: end >= pokemon.length };
      });
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
