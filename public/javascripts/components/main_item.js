import React from 'react';
import PokemonService from '../services/pokemon';
import ListItem from './list_item';
import Ability from './ability';

const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: {
        abilities: [],
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
