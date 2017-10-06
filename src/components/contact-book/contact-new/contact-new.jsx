import React from 'react';
import PropTypes from 'prop-types';

import ContactEditBlock from '../contact-edit-block/contact-edit-block';

import { addContact } from '../contact-book-actions';

const ContactNew = ({ dispatch }) => (
  <div>

    <div className="col-md-12">
      <h2>New contact</h2>
    </div>

    <div className="col-md-12">
      <ContactEditBlock
        onSave={(contact) => dispatch(addContact(contact))}
      />
    </div>

  </div>
);

ContactNew.propTypes = {
  dispatch: PropTypes.func
};

ContactNew.defaultProps = {
  dispatch: () => {}
};

export default ContactNew;
