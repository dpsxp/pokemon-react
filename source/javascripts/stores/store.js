import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import createHistory from 'history/lib/createHashHistory';

var finalReducers = Object.assign({}, reducers, {
  routing: routeReducer
});

var reducer = combineReducers(finalReducers);
var history = createHistory();
var store = createStore(reducer);

syncReduxAndRouter(history, store);

export { history, store };
export default store;
