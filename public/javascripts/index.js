/* jshint esnext: true */
import React from 'react';
import { Router, Route, Link } from 'react-router';
import List from './components/list';
import MainItem from './components/main_item';

React.render((
  /* jshint ignore: start */
  <Router>
    <Route path="/" component={List} />
    <Route path="/pokemon/:id" component={MainItem} />
  </Router>
  /* jshint ignore: end */
  ),
  document.querySelector('#app')
);
