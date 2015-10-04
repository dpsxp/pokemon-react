import React from 'react';
import BaseService from '../services/base';

const Description = React.createClass({
  getInitialState() {
    return {
      description: ''
    };
  },

  componentWillMount() {
    BaseService
      .get(this.props.description.resource_uri)
      .then((description) => this.setState({ description: description }));
  },

  render() {
    var info = this.state.description;

    /* jshint ignore: start */
    return(
      <div className="description">
        <p>{ info.description }</p>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Description;
