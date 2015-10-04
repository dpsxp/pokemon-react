import React from 'react';
import url from 'url';
import Spinner from './spinner';
import { throttle } from 'lodash';

const Lazy = React.createClass({
  getInitialState: function() {
    return { loaded: false };
  },

  componentDidMount: function() {
    this.check();
  },

  check() {
    var evt = 'scroll';

    var fn = throttle(() => {
      var node = this.getDOMNode(),
          top = node.getBoundingClientRect().top + 100;

      if (top < window.screen.height) {
        document.body.removeEventListener(evt, fn);
        this.setState({ loaded: true });
      }
    }, 300);

    document.body.addEventListener(evt, fn, true);

    fn();
  },

  render() {
    /* jshint ignore: start */
    if (!this.state.loaded) {
      return(<div></div>);
    } else {
      return(
        <div>
          { this.props.children}
        </div>
      );
    }
    /* jshint ignore: end */
  }

});

export default Lazy;
