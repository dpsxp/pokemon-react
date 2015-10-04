import { defaults, capitalize } from  'lodash';
import BaseService from  '../services/base';
import url from  'url';

function getId(url) {
  var id = url.match(/\/(\d+)/)[1];
  return parseInt(id, 10);
}

var base = {
  evolutions: [],
  abilities: [],
  descriptions: [],
  sprites: [],
  name: ''
};

function normalizeData(data) {
  defaults(data, base);
  data.name = data.name.split('-').map(capitalize).join(' ');
  return data;
}

class Pokemon {
  constructor(data = {}) {
    data = normalizeData(data);

    Object.keys(data).forEach( prop => this[prop] = data[prop] );

    if (!data.id && data.resource_uri) {
      this.id = getId(data.resource_uri);
    }

    this.evolutions = data.evolutions.map(function(data) {
      data.name = data.to;
      return pokemonFactory(data);
    });
  }

  thumbUrl() {
    /* jshint ignore: start */
    return url.resolve(BaseService.BASE_URL, `/media/img/${this.id}.png`);
    /* jshint ignore: end */
  }
}

export function pokemonFactory(data) {
  return new Pokemon(data);
}

export default Pokemon;
