import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { createNewStore } from './reducers/store';
import App from './components/app';

const store = createNewStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('main'));
