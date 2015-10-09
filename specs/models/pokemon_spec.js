import Pokemon from '../../source/javascripts/models/pokemon';
import BaseService from  '../../source/javascripts/services/base';
import url from 'url';

describe('Pokemon', function() {
  describe('constructor', function() {
    it('sets all data given in the pokemon attributes', function() {
      var data = {
        resource_uri: 'fake.com/pokemon/19',
        name: 'fake'
      };

      var pokemon = new Pokemon(data);

      Object.keys(data).forEach( (prop) => {
        expect(pokemon[prop]).toEqual(data[prop]);
      });
    });

    it('it extracts the id from the resource_uri prop when no id is given', function() {
      var data = { resource_uri: 'fake.com/pokemon/19' },
          pokemon = new Pokemon(data);

      expect(pokemon.id).toEqual(19);
    });

    describe('uses defaults attributes for', function() {
      var pokemon = '';

      beforeEach(function() {
        pokemon = new Pokemon();
      });

      it('abilities', function() {
        expect(pokemon.abilities).toEqual([]);
      });

      it('evolutions', function() {
        expect(pokemon.evolutions).toEqual([]);
      });

      it('sprites', function() {
        expect(pokemon.sprites).toEqual([]);
      });

      it('descriptions', function() {
        expect(pokemon.descriptions).toEqual([]);
      });
    });
  });

  describe('#thumbUrl', function() {
    it('returns the pokemon thumb url based on the pokemon id', function() {
      var pokemon = new Pokemon({ id: 32 }),
          thumbUrl = url.resolve(BaseService.BASE_URL, `/media/img/32.png`);

      expect(pokemon.thumbUrl()).toEqual(thumbUrl);
    });
  });
});
