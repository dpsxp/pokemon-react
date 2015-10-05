import React from 'react';
import { Link } from 'react-router';

const MainNav = React.createClass({
  getInitialState() {
    return { back: '' };
  },

  toggle: function() {
    var node = this.getDOMNode();
    node.parentNode.classList.toggle('is-visible');
  },


  componentWillReceiveProps(nextProps) {
    /* jshint ignore: start */
    this.setState({ back: `/${this.props.params.splat}` });
    /* jshint ignore: end */
  },

  render() {
    /* jshint ignore: start */
    var backLink = '';

    if (this.state.back) {
      backLink = <Link onClick={ this.toggle } className="mdl-navigation__link" to={ this.state.back }>Back</Link>;
    }

    return(
      <nav className="mdl-navigation">
        <Link onClick={ this.toggle } className="mdl-navigation__link" to='/'>Home</Link>
        { backLink }
      </nav>
    );
    /* jshint ignore: end */
  }
});

export default MainNav;
