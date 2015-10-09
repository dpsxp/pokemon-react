import React from 'react';
import url from 'url';
import Spinner from './spinner';

const ImageItem = React.createClass({
  getInitialState: function() {
    return { loaded: false };
  },

  loadImage: function() {
    var img = document.createElement('img');
    img.addEventListener('load', () => this.setState({ loaded: true }) );
    img.addEventListener('error', () => this.setState({ broken: true }) );
    img.src = this.props.src;
  },

  componentWillMount: function() {
    this.loadImage();
  },

  render() {
    /* jshint ignore: start */
    var src = this.props.src,
        alt = this.props.alt,
        title = this.props.title;

    if (this.state.broken) {
      return(<i className="broken-image--big material-icons">broken_image</i>);
    } else if (!this.state.loaded) {
      return(<Spinner />);
    } else {
      return <img className="thumb" src={ src } alt={ alt } title={ title } />;
    }
    /* jshint ignore: end */
  }

});

export default ImageItem;
