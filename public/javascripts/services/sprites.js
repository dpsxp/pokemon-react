import BaseService from './base';
import { defaults, partial } from 'lodash';

var SpritesService = {
  BASE_URL: `${BaseService.BASE_URL}/sprite`,

  get(id, cache = true) {
    var path = this.BASE_URL + id;

    return new Promise(partial(this.doRequest, path, cache));
  }
};

defaults(SpritesService, BaseService);

export default SpritesService
