import PokedexService from '../../public/javascripts/services/pokedex';
import BaseService from '../../public/javascripts/services/base';
import PokemonModel from '../../public/javascripts/models/pokemon';
import dispatcher from '../../public/javascripts/dispatcher';

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
      var spy = spyOn(dispatcher, 'dispatch');

      PokedexService.get().then( ({ pokemons, total }) => {
        expect(spy).toHaveBeenCalledWith({
          type: 'pokedex/fetched',
          pokemons: pokemons,
          total: total
        });

        done();
      });

      this.server.respond();
    });

    it('returns a promise filled with a object with list of Pokemon models and the total pokemons in the server', function(done) {
      PokedexService.get().then(({ pokemons, total }) => {
        expect(total).toEqual(this.response.pokemon.length);
        pokemons.forEach(function(pokemon) {
          expect(pokemon).toEqual(jasmine.any(PokemonModel));
        });
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
