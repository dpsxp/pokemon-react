import React from 'react';
import AbilityService from '../services/ability';
import Accordion from './accordion';

const Ability = React.createClass({
  getInitialState() {
    return { info: {} };
  },

  getInfo() {
    var id = this.props.info.resource_uri.match(/\/\d+/)[0];

    return AbilityService.get(id);
  },

  showInfo(evt) {
    evt.preventDefault();
    var _this = this;

    if (!this.state.info.description) {
      this.getInfo().then((info) => _this.setState({ info: info }));
    }
  },

  render() {
    /* jshint ignore: start */
    var info = this.props.info;

    return(
      <div className="ability-ttem">
        <p>{info.name}</p>
        <Accordion message={this.state.info.description} onClick={this.showInfo} />
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Ability;
