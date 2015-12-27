import PokedexService from '../../source/javascripts/services/pokedex';
import BaseService from '../../source/javascripts/services/base';
import PokemonModel from '../../source/javascripts/models/pokemon';
import store from '../../source/javascripts/stores/store';

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
      this.response = require('../fixtures/pokedex.json');
      this.server.respondWith(
        'GET',
        PokedexService.BASE_URL,
        [200, { 'Content-Type' : 'application/json' }, JSON.stringify(this.response)]
      );
    });

    afterEach(function() {
      this.server.restore();
    });

    it('dispatches a fetched action', function(done) {
      var spy = spyOn(store, 'dispatch');

      PokedexService.get(10).then( ({ pokemons, total, page }) => {
        expect(spy).toHaveBeenCalledWith({
          type: 'pokedex/loaded',
          pokemons: pokemons,
          total: total,
          page: 10
        });

        done();
      });

      this.server.respond();
    });

    it('returns a promise filled with a object with list of Pokemon models and the total pokemons in the server and the current page', function(done) {
      PokedexService.get(10).then(({ pokemons, total, page }) => {
        expect(total).toEqual(this.response.pokemon.length);
        pokemons.forEach(function(pokemon) {
          expect(pokemon).toEqual(jasmine.any(PokemonModel));
        });
        expect(page).toEqual(10);

        done();
      });

      this.server.respond();
    });

    it('does pagination with a default limit to 50', function(done) {
      PokedexService.get().then(function({ pokemons }) {
        expect(pokemons.length).toEqual(50);
        done();
      });
    });
  });
});
