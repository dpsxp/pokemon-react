// libs
import React from 'react';

// Services
import PokemonService from '../services/pokemon';

// Model
import PokemonModel from '../models/pokemon';

// Components
import Description from './description';
import Sprites from './sprites';
import Evolutions from './evolutions';
import LoadingScreen from './loading_screen';
import ImageItem from './image_item';


const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: new PokemonModel(),
      loaded: false
    };
  },

  loadPokemon(id) {
    return PokemonService.get(id)
      .then((pokemon) => this.setState({ pokemon: pokemon, loaded: true }));
  },

  componentWillReceiveProps(nextProps) {
    this.loadPokemon(nextProps.params.id);
    this.setState({ loaded: false });
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

    if (!this.state.loaded) {
      return <LoadingScreen />
    }

    return(
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <h2>{ pokemon.name }</h2>
        </div>

        <div className="mdl-cell mdl-cell--8-col">
          { descriptionItem() }
          <h3>Status</h3>
          <ul>
            <li>HP: {pokemon.hp}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Speed: {pokemon.speed}</li>
          </ul>
        </div>

        <div className="mdl-cell mdl-cell--2-col">
          <ImageItem src={ pokemon.thumbUrl() } alt={pokemon.name} />
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
