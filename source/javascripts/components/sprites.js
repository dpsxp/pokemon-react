import React from 'react';
import ImageItem from './image_item';
import BaseService from '../services/base';

const Sprites = React.createClass({
  getInitialState() {
    return {
      sprites: []
    };
  },

  loadSprites(sprites) {
    Promise
      .all(sprites.map((sprite) => BaseService.get(sprite.resource_uri)))
      .then((response) => this.setState({ sprites: response }));
  },

  componentWillReceiveProps(nextProps) {
    this.loadSprites(nextProps.sprites);
  },

  componentDidMount() {
    this.loadSprites(this.props.sprites);
  },

  render() {
    /* jshint ignore: start */
    var sprites = this.state.sprites,
        createImage = function (sprite) {
          return <ImageItem src={ sprite.image } title={ sprite.pokemon.name } />
        };

    return(
      <div className="sprites">
        { sprites.map(createImage) }
      </div>
    );
    /* jshint ignore: end */
  },

});

export default Sprites;
