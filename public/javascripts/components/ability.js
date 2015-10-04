import React from 'react';
import BaseService from '../services/base';
import Accordion from './accordion';

const Ability = React.createClass({
  getInitialState() {
    return { info: {} };
  },

  getInfo() {
    return BaseService.get(this.props.ability.resource_uri);
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
    var ability = this.props.ability;

    return(
      <div className="ability-ttem">
        <p>{ability.name}</p>
        <Accordion message={this.state.info.description} onClick={this.showInfo} />
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Ability;
