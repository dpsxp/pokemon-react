const TIMEOUT = 3000;

var randomEmail = 'testuser' + Math.random() + '@email.com',
    randomAuthor = 'Teste user' + Math.random(),
    randomMessage = 'My teste message' + Math.random();

module.exports = {
  tags: ['form', 'comments'],

  'Go to Pokemon': function(client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('.pokedex-list-js', TIMEOUT)
      .waitForElementVisible('.pokemon-item-js:first-child a:first-child', TIMEOUT)
      .click('.pokemon-item-js a');
  },

  'Loading Screen': function(client) {
    client
      .waitForElementVisible('.loading-screen-js', TIMEOUT)
      .waitForElementNotPresent('.loading-screen-js', TIMEOUT);
  },

  'Fill the form': function(client) {
    var form = '.comments-form-js',
        author = form + ' input[name="author"]',
        email = form + ' input[name="email"]',
        message = form + ' textarea[name="message"]';

    client
      .waitForElementVisible(form, TIMEOUT)
      .setValue(author, randomAuthor)
      .setValue(email, randomEmail)
      .setValue(message, randomMessage)
      .submitForm(form)
      .assert.value(author, '')
      .assert.value(email, '')
      .assert.value(message, '');
  },

  'See the comment on comments list': function(client) {
    client
      .waitForElementVisible('.comments-box-js .comment-item-js:last-child', TIMEOUT)
      .pause(TIMEOUT) // Time to load the others comments
      .assert.containsText('.comments-box-js .comment-item-js:last-child', randomAuthor)
      .assert.containsText('.comments-box-js .comment-item-js:last-child', randomEmail)
      .assert.containsText('.comments-box-js .comment-item-js:last-child', randomMessage);
  },

  'See the comment on the comments list when comes back to the page': function(client) {
    this['Go to Pokemon'](client);
    this['See the comment on comments list'](client);
  }
};
