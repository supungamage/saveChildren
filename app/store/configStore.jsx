import * as redux from 'redux';
import thunk from 'redux-thunk';

import {orphanageReducer, orphanageSearchReducer} from 'orphanageReducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    orphanages: orphanageReducer,
    orphanageSearch: orphanageSearchReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
