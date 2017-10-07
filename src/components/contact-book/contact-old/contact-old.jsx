import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactEditBlock from '../contact-edit-block/contact-edit-block';
import { editContact } from '../contact-book-actions';

// todo: move similar functinality to same block
const ContactOld = ({ dispatch, list, match: { params: { contactId } } }) => {
  const contactIdNumber = Number(contactId);
  const contact = list.find(({ id }) => id === contactIdNumber );

  if (!contact) return (<div><span>Not Found</span></div>);

  return (
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
};

ContactOld.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      contactId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

ContactOld.defaultProps = {
  dispatch: () => {},
  list: [],
  match: { params: { contactId: 0 } }
};

export default connect(() => ({}))(ContactOld);
