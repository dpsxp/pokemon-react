import React from 'react';
import PokemonService from '../services/pokemon';
import ListItem from './list_item';
import Ability from './ability';
import Description from './description';
import Sprites from './sprites';

const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: {
        abilities: [],
        sprites: [],
        descriptions: [],
        evolutions: []
      }
    };
  },

  loadPokemon(id) {
    var _this = this;

    return PokemonService.get(id)
      .then(function(pokemon) {
        _this.setState({ pokemon: pokemon });
      });
  },

  componentWillReceiveProps(nextProps) {
    this.loadPokemon(nextProps.params.id);
  },

  componentDidMount() {
    this.loadPokemon(this.props.params.id);
  },

  render() {
    /* jshint ignore: start */
    var pokemon = this.state.pokemon,
        createItem = function(evo) {
          evo.name = evo.to;
          return <ListItem pokemon={evo} />
        },

        abilityItem = function(abi) {
          return <Ability ability={abi} />
        },

        descriptionItem = function() {
          if (pokemon.descriptions.length > 0) {
            return <Description description={ pokemon.descriptions[0] } />
          }
        },

        imageItem = function () {
          return <Sprites sprites={ pokemon.sprites } />
        },

        shouldRender = function(prop, cb) {
          if (pokemon[prop].length == 0) {
            return '';
          } else {
            var itemName = prop[0].toUpperCase() + prop.slice(1);

            return(
              <div>
                <p>{ itemName }</p>
                { pokemon[prop].map(cb) }
              </div>
            );
          }
        };


    return(
      <div class="main-item">
        <h2>{pokemon.name}</h2>

        { descriptionItem() }
        { imageItem() }

        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>


        { shouldRender('abilities', abilityItem) }
        { shouldRender('evolutions', createItem) }

      </div>
    );
    /* jshint ignore: end */
  }
});

export default MainItem;
