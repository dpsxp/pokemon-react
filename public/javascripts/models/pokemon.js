function getId(url) {
  var id = url.match(/\/(\d+)/)[1];
  return parseInt(id, 10);
}

class Pokemon {
  constructor(data) {
    Object.keys(data).forEach( prop => this[prop] = data[prop] );
    this.id = getId(data.resource_uri);
  }
}

export function pokemonFactory(data) {
  return new Pokemon(data);
}

export default Pokemon;
