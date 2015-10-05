import React from 'react';
import url from 'url';
import Spinner from './spinner';
import { throttle } from 'lodash';

const Lazy = React.createClass({
  getDefaultProps() {
    return { onReady: function() {}, time: 500 };
  },

  getInitialState() {
    return { loaded: false };
  },

  on() {
    document.body.addEventListener('scroll', this.check, true);
  },

  componentDidMount() {
    this.check = throttle(() => {
      var node = this.getDOMNode(),
          top = node.getBoundingClientRect().top + 100;

      if (top < window.screen.height) {
        this.ready();
      }

    }, this.props.time);

    this.check();
    this.on();
  },

  componentDidUpdate() {
    this.off();
    this.on();
  },

  ready() {
    this.off();
    this.setState({ loaded: true });
    this.props.onReady();
  },

  off() {
    document.body.removeEventListener('scroll', this.check, true);
  },

  componentWillUnmount() {
    this.off();
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
