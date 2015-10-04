import { defaults } from  'lodash';

function getId(url) {
  var id = url.match(/\/(\d+)/)[1];
  return parseInt(id, 10);
}

var base = {
  evolutions: [],
  abilities: [],
  descriptions: [],
  sprites: []
};

class Pokemon {
  constructor(data = {}) {
    defaults(data, base);
    Object.keys(data).forEach( prop => this[prop] = data[prop] );

    if (!data.id && data.resource_uri) {
      this.id = getId(data.resource_uri);
    }

    this.evolutions = data.evolutions.map(pokemonFactory);
  }
}

export function pokemonFactory(data) {
  return new Pokemon(data);
}

export default Pokemon;
