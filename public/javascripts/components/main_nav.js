import React from 'react';
import { Link } from 'react-router';

const MainNav = React.createClass({
  render() {
    /* jshint ignore: start */
    return(
      <nav className="mdl-navigation">
        <Link className="mdl-navigation__link" to='/'>Home</Link>
      </nav>
    );
    /* jshint ignore: end */
  }
});

export default MainNav;
