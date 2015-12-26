import React from 'react';
import ReactDOM from 'react-dom';

const Spinner = React.createClass({
  componentDidMount() {
    new MaterialSpinner(ReactDOM.findDOMNode(this));
  },

  render() {
    /* jshint ignore: start */
    return(<div className="mdl-spinner mdl-js-spinner is-active"></div>);
    /* jshint ignore: end */
  }

});

export default Spinner;
