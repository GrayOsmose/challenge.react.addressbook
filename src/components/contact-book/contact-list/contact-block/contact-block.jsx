import React from 'react';
import PropTypes from 'prop-types';

const ContactBlock = ({ contact: { id, name: { first, last } } }) => (
  <div>

    <span>{first} {last}</span>

  </div>
);

ContactBlock.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })
};

ContactBlock.defaultProps = {
  contact: { name: {} }
};

export default ContactBlock;
