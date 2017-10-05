import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as reducers from './reducers';
import App from './components/app';

const store = createStore(combineReducers(reducers));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('main'));
