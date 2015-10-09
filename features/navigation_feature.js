module.exports = {
  tags: ['navigation'],

  before: function(client) {
    client
      .url(client.globals.pageURL);
  },

  'Go to Pokemon': function(client) {
    client
      .waitForElementVisible('.pokedex-list-js')
      .waitForElementVisible('.pokemon-item-js:first-child a:first-child')
      .click('.pokemon-item-js a')
      .waitForElementPresent('.main-item-js');
  },

  'Back to home': function(client) {
    client
      .click('.back-btn-js');
  },

  'Go to pokemon again': function(client) {
    this['Go to Pokemon'](client);
  },

  'Go to Evolution': function(client) {
    client
      .waitForElementVisible('.accordion-btn-js')
      .click('.accordion-btn-js')
      .waitForElementVisible('.pokemon-item-js')
      .click('.pokemon-item-js:first-child a');
  },

  'Back to home again': function(client) {
    this['Back to home'](client);

    client
      .waitForElementVisible('.pokedex-list-js');
  }

};
