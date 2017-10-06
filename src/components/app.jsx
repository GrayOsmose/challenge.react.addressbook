import React from 'react';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

import ContactBook from './contact-book/contact-book';

const App = () => (
  <div className="container-fluid">
    <Router history={hashHistory}>
      <Route path="/" component={ContactBook} />
    </Router>
  </div>
);

export default App;
