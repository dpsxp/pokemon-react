import BaseService from './base';
import { partial, defaults } from 'lodash';
import { pokemonFactory } from '../models/pokemon';
import dispatcher from '../dispatcher';
import PokedexActions from '../actions/pokedex_actions';

function parsePokemons(start, end, { pokemon }) {
  var pokemons = pokemon
    .slice(start, end)
    .map(pokemonFactory);

  return { pokemons: pokemons, total: pokemon.length };
}

function dispatchAction({ pokemons, total}) {
  var action = PokedexActions.FETCHED;

  action.pokemons = pokemons;
  action.total = total;

  dispatcher.dispatch(action);
}

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(page = 0, offset = 50, cache = true) {
    var start = page * offset,
        end = (page * offset) + offset;

    return BaseService
      .get.call(this, '', cache)
      .then(partial(parsePokemons, start, end))
      .then(dispatchAction);
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
