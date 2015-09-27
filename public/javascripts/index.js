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
  });

