import {defaults, partial} from 'lodash';
import BaseService from './base';

var PokemonService = {
  BASE_URL: BaseService.BASE_URL + '/pokemon',

  get(id, cache = true) {
    var path = this.BASE_URL + '/' + id;

    return new Promise(partial(this.doRequest, path, cache));
  }
};

defaults(PokemonService, BaseService);

export default PokemonService;