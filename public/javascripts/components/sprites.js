import React from 'react';
import ImageItem from './image_item';
import SpritesService from '../services/sprites';

const Helper = {
  getId(resource) {
    var id = resource.resource_uri.match(/\/\d+/)[0];
    return id;
  }
};

const Sprites = React.createClass({
  mixins: [Helper],

  getInitialState() {
    return {
      sprites: []
    };
  },

  loadSprites(sprites) {
    Promise
      .all(sprites.map((sprite) => SpritesService.get(this.getId(sprite))))
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
        <ul>
          { sprites.map(createImage) }
        </ul>
      </div>
    );
    /* jshint ignore: end */
  },

});

export default Sprites;
