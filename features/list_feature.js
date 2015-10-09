module.exports = {
  tags: ['list'],

  'List of pokemons': function(client) {
    client
      .url(client.globals.pageURL)
      .waitForElementVisible('.load-more-js')
      .waitForElementVisible('.pokedex-list-js');
  }
};
