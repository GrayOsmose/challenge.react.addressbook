import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactEditBlock from '../contact-edit-block/contact-edit-block';
import { editContact } from '../contact-book-actions';

const ContactOld = ({ dispatch, contact }) => (
  <div>

    <div className="col-md-12">
      <h2>Old contact</h2>
    </div>

    <div className="col-md-12">
      <ContactEditBlock
        contact={contact}
        onSave={(saveData) => dispatch(editContact(saveData))}
      />
    </div>

  </div>
);

ContactOld.propTypes = {
  dispatch: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })
};

ContactOld.defaultProps = {
  dispatch: () => {},
  contact: { name: {} }
};

export default connect(() => ({}))(ContactOld);
