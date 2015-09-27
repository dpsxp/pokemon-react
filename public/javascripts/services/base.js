import Cache from './cache';
import url from 'url';

const BaseService = {
  BASE_URL : 'http://pokeapi.co/api/v1',

  doRequest(path, cache, resolve, reject) {
    var cachedData = Cache.get(path);

    if (cache && cachedData) {
      return resolve(cachedData);
    }

    let xhr = new XMLHttpRequest();

    xhr.open('GET', path, true);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var json = {};

        try {
          json = JSON.parse(xhr.responseText);
        } catch (e) {
          return reject(e, xhr);
        }

        if (cache) {
          Cache.set(path, json);
        }

        resolve(json);
      }
    };

    xhr.onerror = function(evt) {
      reject(evt, xhr);
    };

    xhr.send();
  },

  get(path, cache = true) {
    path = url.resolve(this.BASE_URL, path);

    return this.doRequest(path, cache, resolve, reject);
  }
};

export default BaseService;
