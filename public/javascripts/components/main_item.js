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

  getPokemon() {
    return PokemonService.get(this.props.params.id);
  },

  componentDidMount() {
    var _this = this;

    this.getPokemon().then(function(pokemon) {
      _this.setState({ pokemon: pokemon });
    });
  },

  render() {
    /* jshint ignore: start */
    var pokemon = this.state.pokemon,
        createItem = function(evo) {
          evo.name = evo.to;
          return <ListItem pokemon={evo} />
        },
        abilityItem = function(abi) {
          return <Ability info={abi} />
        }

    return(
      <div class="main-item">
        <h2>{pokemon.name}</h2>
        <h3>Info:</h3>

        <p>HP: {pokemon.hp}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Speed: {pokemon.speed}</p>

        <p>Abilities:</p>
        <ul>
          {pokemon.abilities.map(abilityItem)}
        </ul>

        <p>Evolutions</p>
        <ul>
          {pokemon.evolutions.map(createItem)}
        </ul>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default MainItem;
