import React from 'react';
import DescriptionService from '../services/description';

const Description = React.createClass({
  getInitialState() {
    return {
      description: ''
    };
  },

  getId() {
    var description = this.props.description;
    var id = description.resource_uri.match(/\/\d+/)[0];
    return id;
  },

  componentWillMount() {
    DescriptionService
      .get(this.getId())
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
