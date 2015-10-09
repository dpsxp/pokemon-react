import PokemonStore from '../../public/javascripts/stores/pokemon';
import PokemonService from '../../public/javascripts/services/pokemon';
import dispatcher from '../../public/javascripts/dispatcher';
import PokemonActions from '../../public/javascripts/actions/pokemon_actions';
import PokemonModel from '../../public/javascripts/models/pokemon';

describe('PokemonStore', function() {
  describe('#getInitialState', function() {
    it('returns a PokemonModel instance', function() {
      expect(PokemonStore.getState()).toEqual(jasmine.any(PokemonModel));
    });
  });

  describe('#loadData', function() {
    it('fetchs the data from PokemonService based on the given :id', function() {
      var spy = spyOn(PokemonService, 'get');
      PokemonStore.loadData(13);
      expect(spy).toHaveBeenCalledWith(13);
    });
  });

  describe('actions response', function() {
    describe('pokemon/loaded', function() {
      it('sets the action.pokemon as the current state', function() {
        var action = PokemonActions.LOADED;
        action.pokemon = new PokemonModel({ name: 'pikachu' });
        dispatcher.dispatch(action);
        expect(PokemonStore.getState()).toEqual(action.pokemon);
      });
    });
  });
});