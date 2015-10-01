/* jshint ignore: start */
import React from 'react';
import { Router, Route } from 'react-router';
import List from './components/list';
import MainItem from './components/main_item';
import MainNav from './components/main_nav';

React.render((
  <Router>
    <Route path="/" component={List} />
    <Route path="/pokemon/:id" component={MainItem} />
  </Router>
  ),
  document.querySelector('#app')
);

React.render((
  <Router>
    <Route path="*" component={MainNav} />
  </Router>
  ),
  document.querySelector('#nav')
)
