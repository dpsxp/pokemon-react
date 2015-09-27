/* jshint esnext: true */

import React from 'react';
import PokedexService from './services/pokedex';
import List from './components/list';

PokedexService
  .get()
  .then(function(data) {
    React.render(
      React.createElement(List, { pokemons: data}),
      document.querySelector('#app')
    );
  })
  .catch(function() {
    var args = [].slice.call(arguments);
    console.log.apply(console, ['Oops! Something went wrong'].concat(args));
  });

