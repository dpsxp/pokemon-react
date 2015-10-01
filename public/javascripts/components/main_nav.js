import React from 'react';
import { Link } from 'react-router';

const MainNav = React.createClass({
  render() {
    /* jshint ignore: start */
    return(
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    );
    /* jshint ignore: end */
  }
});

export default MainNav;
