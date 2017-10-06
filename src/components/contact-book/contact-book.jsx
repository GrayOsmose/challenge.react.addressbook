import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import ContactList from './contact-list/contact-list';
import ContactNew from './contact-new/contact-new';
import ContactOld from './contact-old/contact-old';

const ContactBook = ({ current, children }) => (
  <div className="col-sm-12">

    <div className="row">

      <h1>Address-Book</h1>

    </div>

    <div className="row">

      <div className="col-md-4">
        <ContactList />
      </div>

      <div className="col-md-8">
        <Route path="/new" component={ContactNew} />
        <Route path="/edit" component={ContactOld} />
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

export default connect(({ contactBook: { current } }) => ({
  current
}))(ContactBook);
