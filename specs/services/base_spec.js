import BaseService from '../../source/javascripts/services/base';
import Cache from '../../source/javascripts/services/cache';

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
    var path, response;

    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      path = `${BaseService.BASE_URL}/pokemons`;
      response = { pokemons: [] };
    });

    afterEach(function() {
      this.server.restore();
    });

    it('makes a http request based on path', function(done) {

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

    it('calls the error callback when something went wrong', function() {
      this.server.respondWith(
        'GET',
        path,
        [404, {'Content-Type': 'application/json'}, '{}']
      );

      var foo = {
        error: function() {}
      };

      spyOn(foo, 'error');

      BaseService.doRequest(path, false, undefined, foo.error);
      this.server.respond();

      expect(foo.error).toHaveBeenCalled();
    });

    it('calls the error callback when the server response is not a valid json', function() {
      this.server.respondWith(
        'GET',
        path,
        [404, {'Content-Type': 'application/json'}, '']
      );

      var foo = {
        error: function() {}
      };

      spyOn(foo, 'error');

      BaseService.doRequest(path, false, undefined, foo.error);
      this.server.respond();

      expect(foo.error).toHaveBeenCalled();
    });
  });

  describe('#get', function() {
    it('makes a http request and returns a promise', function() {
      spyOn(BaseService, 'doRequest');

      var path = `${BaseService.BASE_URL}/pokemons`,
          result = BaseService.get(path, false);

      expect(result).toEqual(jasmine.any(Promise));
    });
  });
});
