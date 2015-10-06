// libs
import React from 'react';

// Services
import PokemonService from '../services/pokemon';

// Stores
import PokemonStore from '../stores/pokemon';
import { dispatcher } from '../stores/pokedex';

// Components
import Description from './description';
import Sprites from './sprites';
import Evolutions from './evolutions';
import LoadingScreen from './loading_screen';
import ImageItem from './image_item';


const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: PokemonStore.getState(),
      loaded: false
    };
  },

  _onLoad() {
    this.setState({
      pokemon: PokemonStore.getState(),
      loaded: true
    });
  },

  componentWillReceiveProps(nextProps) {
    PokemonStore.loadData(nextProps.params.id);
  },

  componentDidMount() {
    this.dispatcherToken = PokemonStore.addListener(this._onLoad);
    PokemonStore.loadData(this.props.params.id);
  },

  componentWillUnmount() {
    this.dispatcherToken.remove(this._onLoad);
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
