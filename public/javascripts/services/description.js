import BaseService from './base';
import { defaults, partial } from 'lodash';

var DescriptionService = {
  BASE_URL: `${BaseService.BASE_URL}/description`,

  get(id, cache = true) {
    var path = this.BASE_URL + id;

    return new Promise(partial(this.doRequest, path, cache));
  }
};

defaults(DescriptionService, BaseService);



export default DescriptionService;
