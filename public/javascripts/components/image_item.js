import React from 'react';
import BaseService from '../services/base';
import url from 'url';
import Spinner from './spinner';

const ImageItem = React.createClass({
  getInitialState: function() {
    return { loaded: false };
  },

  loadImage: function() {
    var img = document.createElement('img');
    img.addEventListener('load', () => this.setState({ loaded: true }) );
    img.src = this.getPath(this.props.src);
  },

  componentWillMount: function() {
    this.loadImage();
  },

  getPath(src) {
    return url.resolve(BaseService.BASE_URL, src);
  },

  render() {
    /* jshint ignore: start */
    var src = this.props.src,
        title = this.props.title;

    if (!this.state.loaded) {
      return(<Spinner />);
    } else {
      return <img className="thumb" src={ this.getPath(src) } title={ title } />;
    }
    /* jshint ignore: end */
  }

});

export default ImageItem;
