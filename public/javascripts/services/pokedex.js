/* jshint esnext: true */

import cache from './.cache';
const BASE_URL = 'http://pokeapi.co/api/v1/pokedex/1';

function doRequest(cache, resolve, reject) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', BASE_URL, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      var json = {};

      try {
        json = JSON.parse(xhr.responseText);
      } catch (e) {
        return reject(e, xhr);
      }

      if (cache) {
        cache.set(BASE_URL, json.pokemon);
      }

      resolve(json.pokemon);
    }
  };

  xhr.onerror = function(evt) {
    reject(evt, xhr);
  };

  xhr.send();
}

class PokedexService {
  static get(cache = true) {
    return new Promise(function(resolve, reject) {
      var cachedData = cache.get(BASE_URL);
      if (cachedData) {
        resolve(cachedData);
      } else {
        return doRequest(cache, resolve, reject);
      }
    });
  }
}

export default PokedexService;
