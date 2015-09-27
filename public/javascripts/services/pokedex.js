import BaseService from './base';
import {partialRight, get, defaults, partial} from 'lodash';

var PokedexService = {
  BASE_URL : BaseService.BASE_URL + '/pokedex/1',

  get(cache = true) {
    var url = this.BASE_URL,
        _this = this;

    return new Promise(partial(_this.doRequest, url, cache))
      .then(partialRight(get, 'pokemon'));
  }
};

defaults(PokedexService, BaseService);

export default PokedexService;
