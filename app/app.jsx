import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
var store = require('configStore').configure();

import Main from 'Main';
import OrphanageApp from 'OrphanageApp';

$(document).foundation();

require('style!css!sass!applicationStyles');

var store =

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="orphanage" component={OrphanageApp}/>
        <IndexRoute component={OrphanageApp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
