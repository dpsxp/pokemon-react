import PokemonService from '../../source/javascripts/services/pokemon';
import BaseService from '../../source/javascripts/services/base';
import PokemonModel from '../../source/javascripts/models/pokemon';
import store from '../../source/javascripts/stores/store';

describe('PokemonService', function() {
  describe('#BASE_URL', function() {
    it('return the service base url', function() {
      var url = `${BaseService.BASE_URL}/pokemon`;
      expect(PokemonService.BASE_URL).toEqual(url);
    });
  });

  describe('#get', function() {
    beforeEach(function() {
      this.server   = sinon.fakeServer.create();
      this.response = require('../fixtures/pokemon.json');
      this.id       = 1;
      var path      = `${PokemonService.BASE_URL}/${this.id}`;

      this.server.respondWith(
        'GET',
        path,
        [200, { 'Content-Type' : 'application/json' }, JSON.stringify(this.response)]
      );

    });

    afterEach(function() {
      this.server.restore();
    });

    it('dispatches a pokemon/loaded action', function(done) {
      var spy = spyOn(store, 'dispatch');

      PokemonService.get(this.id).then( (pokemon) => {
        expect(spy).toHaveBeenCalledWith({
          type: 'pokemon/loaded',
          pokemon: pokemon
        });

        done();
      });

      this.server.respond();
    });

    it('returns a promise filled with a Pokemon model', function(done) {
      PokemonService.get(this.id).then(function(pokemon) {
        expect(pokemon).toEqual(jasmine.any(PokemonModel));
        done();
      });

      this.server.respond();
    });
  });
});
