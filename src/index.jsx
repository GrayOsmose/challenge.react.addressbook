import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createNewStore } from './reducers/store';
import App from './components/app';

const store = createNewStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('main'));
