import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import ContactList from './contact-list';
import Disclaimer from './disclaimer';
import ContactView from './contact-view';
import ContactNew from './contact-new';
import ContactOld from './contact-old';

const ContactBook = ({ children }) => (
  <div className="col-sm-12">

    <div className="row">

      <h1>Address-Book</h1>
      <Link to="/new">
        <Button>
          <span className="glyphicon glyphicon-plus" />
        </Button>
      </Link>

    </div>

    <div className="row">

      <div className="col-md-4">
        <ContactList />
      </div>

      <div className="col-md-8">
        <Route exact path="/" component={Disclaimer} />
        <Route path="/new" component={ContactNew} />
        <Route path="/view/:contactId" component={ContactView} />
        <Route path="/edit/:contactId" component={ContactOld} />
      </div>

    </div>

  </div>
);

ContactBook.propTypes = {
  current: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  }),
  children: PropTypes.any
};

ContactBook.defaultProps = {
  current: null,
  children: null
};

export default ContactBook;
