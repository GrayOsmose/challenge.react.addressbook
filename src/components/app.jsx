import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import ContactBook from './contact-book';

const App = () => (
  <div className="container-fluid">
    <Router history={browserHistory}>
      <Route path="/" component={ContactBook} />
    </Router>
  </div>
);

export default App;
