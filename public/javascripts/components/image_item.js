import React from 'react';
import BaseService from '../services/base';
import url from 'url';

const ImageItem = React.createClass({
  getPath(src) {
    return url.resolve(BaseService.BASE_URL, src);
  },

  render() {
    /* jshint ignore: start */
    var src = this.props.src,
        title = this.props.title;

    return <img className="thumb" src={ this.getPath(src) } title={ title } />;
    /* jshint ignore: end */
  }

});

export default ImageItem;
