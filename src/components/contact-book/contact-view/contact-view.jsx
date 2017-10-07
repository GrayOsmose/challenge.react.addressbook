import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// todo: move similar functinality to same block
const ContactView = ({ list, match: { params: { contactId } } }) => {
  const contactIdNumber = Number(contactId);
  const contact = list.find(({ id }) => id === contactIdNumber );

  if (!contact) return (<div><span>Not Found</span></div>);

  const { id, name: { first, last } } = contact;

  return (

    <div>

      <div className="col-md-12">
        <h2>View Contact</h2>
      </div>

      <div className="col-md-12">
        <span>{first} {last}</span>
      </div>

    </div>
  );
};

ContactView.propTypes = {
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

ContactView.defaultProps = {
  list: [],
  params: {},
  match: { params: { contactId: 0 } }
};

export default connect(({ contactBook: { list } }) => ({
  list
}))(ContactView);
