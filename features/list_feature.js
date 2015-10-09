const TIMEOUT = 3000;

module.exports = {
  'List of pokemons': function(client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('.load-more-js', TIMEOUT)
      .waitForElementVisible('.pokedex-list-js', TIMEOUT);
  }
};
