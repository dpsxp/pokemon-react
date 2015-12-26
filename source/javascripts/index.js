/* jshint ignore: start */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import List from './components/list';
import MainItem from './components/main_item';
const { Provider } = require('react-redux');
import MainNav from './components/main_nav';
import { store, history } from './stores/store';

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={List} />
      <Route path="/pokemon/:id" component={MainItem} />
    </Router>
  </Provider>
  ),
  document.querySelector('#app')
);

ReactDOM.render((
  <Router>
    <Route path="*" component={MainNav} />
  </Router>
  ),
  document.querySelector('#nav')
)

