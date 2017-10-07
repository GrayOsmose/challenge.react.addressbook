import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactEditBlock from './contact-edit-block';
import { addContact } from '../actions/contact-book-actions';

const ContactNew = ({ dispatch }) => (
  <div>

    <div className="col-md-12">
      <h2>New contact</h2>
    </div>

    <div className="col-md-12">
      <ContactEditBlock
        onSave={(saveData) => dispatch(addContact(saveData))}
      />
    </div>

  </div>
);

ContactNew.propTypes = {
  dispatch: PropTypes.func.isRequired
};

ContactNew.defaultProps = {
  dispatch: () => {}
};

export default connect(() => ({}))(ContactNew);
