// libs
import React from 'react';

// Services
import PokemonService from '../services/pokemon';

// Model
import PokemonModel from '../models/pokemon';

// Components
import Ability from './ability';
import Description from './description';
import Sprites from './sprites';
import Evolutions from './evolutions';


const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: new PokemonModel()
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
        descriptionItem = function() {
          if (pokemon.descriptions.length > 0) {
            return <Description description={ pokemon.descriptions[0] } />
          }
        };

    return(
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>{ pokemon.name }</h2>
        </div>

        <div className="mdl-cell mdl-cell--8-col">
          { descriptionItem() }
          <ul>
            <li>HP: {pokemon.hp}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Speed: {pokemon.speed}</li>
          </ul>
        </div>

        <div className="mdl-cell mdl-cell--2-col">
          <Sprites sprites={ pokemon.sprites } />
        </div>

        <div className="mdl-cell mdl-cell--12-col">
          <Evolutions evolutions={ pokemon.evolutions } />
        </div>

      </div>
    );
    /* jshint ignore: end */
  }
});

export default MainItem;
