import React from 'react';
import PokemonService from '../services/pokemon';

const MainItem = React.createClass({
  getInitialState() {
    return {
      pokemon: {
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
    var pokemon = this.state.pokemon;
    /* jshint ignore: start */
    return(
      <div class="main-item">
        <h2>{pokemon.name}</h2>

        <p>Evolutions</p>
        <ul>
          {
            pokemon.evolutions.map(function(evo) {
              return <li>To: {evo.to}</li>
            })
          }
        </ul>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default MainItem;
