import React from 'react';
import url from 'url';
import Spinner from './spinner';

const ImageItem = React.createClass({
  getInitialState() {
    return { loaded: false };
  },

  broken() {
    this.setState({ broken: true });
  },

  loaded() {
    this.setState({ loaded: true })
  },

  loadImage() {
    this.img = document.createElement('img');
    this.img.addEventListener('load', this.loaded);
    this.img.addEventListener('error', this.broken);
    this.img.src = this.props.src;
  },

  componentWillMount() {
    this.loadImage();
  },

  componentWillUnmount() {
    this.img.removeEventListener('load', this.loaded);
    this.img.removeEventListener('error', this.broken);
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
