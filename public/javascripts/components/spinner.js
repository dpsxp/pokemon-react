import React from 'react';

const Spinner = React.createClass({
  componentDidMount() {
    new MaterialSpinner(this.getDOMNode());
  },

  render() {
    /* jshint ignore: start */
    return(<div className="mdl-spinner mdl-js-spinner is-active"></div>);
    /* jshint ignore: end */
  }

});

export default Spinner;
