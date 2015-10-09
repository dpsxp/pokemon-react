import PokedexStore from '../../source/javascripts/stores/pokedex';
import PokedexService from '../../source/javascripts/services/pokedex';
import dispatcher from '../../source/javascripts/dispatcher';
import PokedexActions from '../../source/javascripts/actions/pokedex_actions';

describe('PokedexStore', function() {
  describe('#getInitialState', function() {
    it('returns a object with a pokemons array', function() {
      var state = PokedexStore.getInitialState();
      expect(state.pokemons).toEqual([]);
    });

    it('returns a object with a page number', function() {
      var state = PokedexStore.getInitialState();
      expect(state.page).toEqual(0);
    });

    it('returns a object with a finished flag', function() {
      var state = PokedexStore.getInitialState();
      expect(state.finished).toEqual(false);
    });
  });

  describe('#loadData', function() {
    it('fetchs the data from PokedexService', function() {
      var spy = spyOn(PokedexService, 'get');
      PokedexStore.loadData();
      expect(spy).toHaveBeenCalledWith(PokedexStore.getState().page, 50);
    });
  });

  describe('actions response', function() {
    describe('pokedex/fetched', function() {
      it('concats the action pokemon in the current state', function() {
        var { pokemons } = PokedexStore.getState(),
            action   = PokedexActions.FETCHED;

        action.pokemons = ['a', 'b', 'c'];
        action.total = 100;

        dispatcher.dispatch(action);

        expect(PokedexStore.getState().pokemons).toEqual(pokemons.concat(action.pokemons));
      });

      it('increases the page', function() {
        var { pokemons, page } = PokedexStore.getState(),
            action   = PokedexActions.FETCHED;

        action.pokemons = ['a', 'b', 'c'];
        action.total = 100;

        dispatcher.dispatch(action);

        expect(PokedexStore.getState().page).toEqual(page + 1);
      });

      it('checks if is in the last page', function() {
        var { pokemons } = PokedexStore.getState(),
            action   = PokedexActions.FETCHED;

        action.pokemons = ['a', 'b', 'c'];
        action.total = 3;

        dispatcher.dispatch(action);

        expect(PokedexStore.getState().finished).toEqual(false);
      });
    });
  });
});
