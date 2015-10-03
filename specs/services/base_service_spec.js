import BaseService from '../../public/javascripts/services/base';
import Cache from '../../public/javascripts/services/cache';

describe('BaseService', function() {
  afterEach(function() {
    Cache.clear();
  });

  describe('#BASE_URL', function() {
    it('returns the api base url', function() {
      expect(BaseService.BASE_URL).toEqual('http://pokeapi.co/api/v1');
    });
  });

  describe('#doRequest', function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
    });

    afterEach(function() {
      this.server.restore();
    });

    it('makes a http request based on path', function(done) {
      var path = `${BaseService.BASE_URL}/pokemons`,
          response = { pokemons: [] };

      this.server.respondWith(
        'GET',
        path,
        [200, {'Content-Type': 'application/json'}, JSON.stringify(response)]
      );

      new Promise((resolve, reject) => {
        BaseService.doRequest(path, false, resolve, reject);
      })
      .then((json) => {
        expect(json).toEqual(response);
        done();
      });

      this.server.respond();
    });

    it('caches the response if the cache param is true', function() {
      var path = `${BaseService.BASE_URL}/pokemons`,
          response = { pokemons: [] };

      this.server.respondWith(
        'GET',
        path,
        [200, {'Content-Type': 'application/json'}, JSON.stringify(response)]
      );

      spyOn(Cache, 'set');

      new Promise((resolve, reject) => {
        BaseService.doRequest(path, true, resolve, reject);
      });

      this.server.respond();

      expect(Cache.set).toHaveBeenCalledWith(path, response);
    });
  });

  describe('#get', function() {
    it('makes a http request and returns a promise', function() {
      var path = `${BaseService.BASE_URL}/pokemons`,
          result = BaseService.get(path, false);

      spyOn(BaseService, 'doRequest');
      expect(result).toEqual(jasmine.any(Promise));
    });
  });
});
