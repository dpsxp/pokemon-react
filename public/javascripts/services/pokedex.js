import BaseService from './base';
import {defaults} from 'lodash';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(cache = true) {
    var url = PokedexService.BASE_URL,
        _this = this;


    var promise = new Promise(function(resolve, reject) {
      _this.doRequest(url, cache, resolve, reject);
    })
    .then(function(json) {
      return json.pokemon;
    });

    return promise;
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
