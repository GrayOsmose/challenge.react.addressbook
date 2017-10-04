import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import App from './components/app';
import Counter from './components/counter';

const store = createStore(combineReducers(reducers));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('main'));
