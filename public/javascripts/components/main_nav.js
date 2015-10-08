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
    if (nextProps.location.pathname === '/') {
      this.setState({ back: undefined });
    } else {
      this.setState({ back: `/${this.props.params.splat}` });
    }
    /* jshint ignore: end */
  },

  componentWillMount() {
    if (this.props.location.pathname !== '/') {
      this.setState({ back: '/' });
    }
  },

  render() {
    /* jshint ignore: start */
    var backLink = '';

    if (this.state.back) {
      return (
        <Link className="mdl-layout__drawer-button" to={ this.state.back }>
          <i className="material-icons">keyboard_arrow_left</i>
        </Link>
      );

    } else {
      return(<div></div>);
    }
    /* jshint ignore: end */
  }
});

export default MainNav;
