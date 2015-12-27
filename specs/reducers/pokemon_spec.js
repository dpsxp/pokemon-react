import pokemon from '../../source/javascripts/reducers/pokemon';
import PokemonService from '../../source/javascripts/services/pokemon';
import PokemonModel from '../../source/javascripts/models/pokemon';

describe('pokemon reducer', () => {
  describe('initialState', () => {
    it('returns a pokemon', () => {
      expect(pokemon().pokemon).toEqual(jasmine.any(PokemonModel));
    });

    it('returns a loaded flag', () => {
      expect(pokemon().loaded).toEqual(false);
    });
  });

  describe('when action is pokemon/load', () => {
    it('returns a pokemon key as a Promise', () => {
      spyOn(PokemonService, 'get').and.returnValue(Promise.all([]));
      var result = pokemon({}, { type: 'pokemon/load' });
      expect(result.pokemon).toEqual(jasmine.any(Promise));
    });
  });

  describe('when action is pokemon/loaded', () => {
    it('returns new state with the correct props', () => {
      var pokemons = { foo: 'bar' };
      var state = { pokemon: [] }

      var result = pokemon(state, {
        type: 'pokemon/loaded',
        pokemon: pokemon,
      });

      expect(result.pokemon).toEqual(pokemon);
      expect(result.loaded).toEqual(true);
    })
  });

  describe('when action type does not match', () => {
    it('returns the same state', () => {
      var state = { foo: 'bar' };
      expect(pokemon(state)).toEqual(state);
    });
  });
});
