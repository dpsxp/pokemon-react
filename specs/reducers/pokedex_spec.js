import pokedex from '../../source/javascripts/reducers/pokedex';
import PokedexService from '../../source/javascripts/services/pokedex';

describe('pokedex reducer', () => {
  describe('initialState', () => {
    it('returns a pokemons array', () => {
      expect(pokedex().pokemons).toEqual([]);
    });

    it('returns a page', () => {
      expect(pokedex().page).toEqual(0);
    });

    it('returns a limit', () => {
      expect(pokedex().limit).toEqual(30);
    });
  });

  describe('when action is pokedex/load', () => {
    it('returns a pokedex key as a Promise', () => {
      spyOn(PokedexService, 'get').and.returnValue(Promise.all([]));
      var result = pokedex({}, { type: 'pokedex/load'});
      expect(result.pokedex).toEqual(jasmine.any(Promise));
    });
  });

  describe('when action is pokedex/loaded', () => {
    it('returns new state with the correct props', () => {
      var pokemons = [1, 2, 3];
      var state = { pokemons: [] }

      var result = pokedex(state, {
        type: 'pokedex/loaded',
        pokemons: pokemons,
        page: 1,
        total: 30
      });

      expect(result.pokemons).toEqual(pokemons);
      expect(result.page).toEqual(1);
      expect(result.total).toEqual(30);
      expect(result.finished).toEqual(false);
    })
  });

  describe('when action type does not match', () => {
    it('returns the same state', () => {
      var state = { foo: 'bar' };
      expect(pokedex(state)).toEqual(state);
    });
  });
});
