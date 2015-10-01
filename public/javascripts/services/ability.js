import { defaults } from 'lodash';
import BaseService from './base';

var AbilityService = {
  BASE_URL: BaseService.BASE_URL + '/ability',
};

defaults(AbilityService, BaseService);

export default AbilityService;
