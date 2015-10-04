import PokemonService from '../../public/javascripts/services/pokemon';
import BaseService from '../../public/javascripts/services/base';
import PokemonModel from '../../public/javascripts/models/pokemon';

describe('PokemonService', function() {
  describe('#BASE_URL', function() {
    it('return the service base url', function() {
      var url = `${BaseService.BASE_URL}/pokemon`;
      expect(PokemonService.BASE_URL).toEqual(url);
    });
  });

  describe('#get', function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
    });

    afterEach(function() {
      this.server.restore();
    });

    it('returns a promise filled with a Pokemon model', function(done) {
      var response = require('../fixtures/pokemon.json'),
          id       = 1,
          path     = `${PokemonService.BASE_URL}/${id}`;

      this.server.respondWith(
        'GET',
        path,
        [200, { 'Content-Type' : 'application/json' }, JSON.stringify(response)]
      );

      PokemonService.get(id).then(function(pokemon) {
        expect(pokemon).toEqual(jasmine.any(PokemonModel));
        done();
      });

      this.server.respond();
    });
  });
});
