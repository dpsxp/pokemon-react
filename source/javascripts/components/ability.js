import React from 'react';
import BaseService from '../services/base';
import Accordion from './accordion';
import { capitalize } from 'lodash';

const Ability = React.createClass({
  render() {
    /* jshint ignore: start */
    var ability = this.props.ability,
        name = ability.name.split('-').map(capitalize).join(' ');

    return(
      <div>{name}</div>
    );
    /* jshint ignore: end */
  }
});

export default Ability;
