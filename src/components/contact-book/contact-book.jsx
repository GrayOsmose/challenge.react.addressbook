import React from 'react';

import ContactList from './contact-list/contact-list';
import ContactNew from './contact-new/contact-new';

const ContactBook = () => (
  <div className="col-sm-12">

    <div className="row">

      <h1>Address-Book</h1>

    </div>

    <div className="row">

      <div className="col-md-4">
        <ContactList />
      </div>

      <div className="col-md-8">
        <ContactNew />
      </div>

    </div>

  </div>
);

export default ContactBook;
