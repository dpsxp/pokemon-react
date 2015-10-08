// libs
import React from 'react';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

// Services
import PokemonService from '../services/pokemon';

// Stores
import PokemonStore from '../stores/pokemon';
import { dispatcher } from '../stores/pokedex';

// Components
import Form from './form';
import CommentsList from './comments_list';
import Description from './description';
import Sprites from './sprites';
import Evolutions from './evolutions';
import LoadingScreen from './loading_screen';
import ImageItem from './image_item';

const FIREBASE_URL = 'https://luminous-heat-8041.firebaseio.com/pokedex';

const MainItem = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return {
      pokemon: PokemonStore.getState(),
      loaded: false,
      comments: []
    };
  },

  _onLoad() {
    this.setState({
      pokemon: PokemonStore.getState(),
      loaded: true
    });

  },

  _bindFirebase(id) {
    this.bindAsArray(new Firebase(FIREBASE_URL + '/' + id ), 'comments');
  },

  componentWillReceiveProps(nextProps) {
    this.unbind('comments');

    this._bindFirebase(nextProps.params.id);

    PokemonStore.loadData(nextProps.params.id);
  },

  componentWillMount() {
    this.dispatcherToken = PokemonStore.addListener(this._onLoad);
    this._bindFirebase(this.props.params.id);
    PokemonStore.loadData(this.props.params.id);
  },

  componentWillUnmount() {
    this.dispatcherToken.remove(this._onLoad);
  },

  handleComment(evt, data) {
    var comment =  data;
    this.firebaseRefs.comments.push(comment);
  },

  render() {
    /* jshint ignore: start */
    var pokemon = this.state.pokemon,
        comments = this.state.comments,
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

        <div className="mdl-cell mdl-cell--12-col">
          <CommentsList comments={ comments } />
        </div>

        <div className="mdl-cell mdl-cell--12-col">
          <Form onSubmit={ this.handleComment } />
        </div>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default MainItem;
