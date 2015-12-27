/* jshint ignore: start */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { MainItem, MainNav, List } from './components';
const { Provider } = require('react-redux');
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

