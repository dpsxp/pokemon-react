import {defaults} from 'lodash';
import BaseService from './base';

var PokemonService = {
  BASE_URL: BaseService.BASE_URL + '/pokemon',

  get(path, cache = true) {
    var id = path.match(/\/\d+/)[0];

    path = this.BASE_URL + id;

    return new Promise(function(resolve, reject) {
      this.doRequest(path, cache, resolve, reject);
    }.bind(this));
  }
};

defaults(PokemonService, BaseService);

export default PokemonService;
