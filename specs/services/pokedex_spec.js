import PokedexService from '../../public/javascripts/services/pokedex';
import BaseService from '../../public/javascripts/services/base';
import PokemonModel from '../../public/javascripts/models/pokemon';

describe('PokedexService', function() {
  describe('#BASE_URL', function() {
    it('return the service base url', function() {
      var url = `${BaseService.BASE_URL}/pokedex/1`;
      expect(PokedexService.BASE_URL).toEqual(url);
    });
  });

  describe('#get', function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
    });

    afterEach(function() {
      this.server.restore();
    });

    it('returns a promise filled with a list of Pokemon models', function(done) {
      var response = require('../fixtures/pokedex.json');

      this.server.respondWith(
        'GET',
        PokedexService.BASE_URL,
        [200, { 'Content-Type' : 'application/json' }, JSON.stringify(response)]
      );

      PokedexService.get().then(function(pokemons) {
        pokemons.forEach(function(pokemon) {
          expect(pokemon).toEqual(jasmine.any(PokemonModel));
        });
        done();
      });

      this.server.respond();
    });
  });
});
