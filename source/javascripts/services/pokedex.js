import BaseService from './base';
import { partial, defaults } from 'lodash';
import { pokemonFactory } from '../models/pokemon';
import PokedexActions from '../actions/pokedex_actions';
import store from '../stores/store';

function parsePokemons(start, end, { pokemon }) {
  var pokemons = pokemon.slice(start, end).map(pokemonFactory);

  return { pokemons: pokemons, total: pokemon.length };
}

function dispatchAction(page, { pokemons, total}) {
  var action = PokedexActions.LOADED;

  action.pokemons = pokemons;
  action.total = total;
  action.page = page

  store.dispatch(action);

  return { pokemons, total, page };
}

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(page = 0, offset = 50, cache = true) {
    var start = page * offset,
        end = (page * offset) + offset;

    return BaseService
      .get.call(this, '', cache)
      .then(partial(parsePokemons, start, end))
      .then(partial(dispatchAction, page));
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
