import React from 'react';
import PropTypes from 'prop-types';

const ContactBlock = ({ contact: { id, name: { first, last } }, onDelete }) => (
  <div>
    <span>{first} {last}</span>
    <span
      className="glyphicon glyphicon-trash"
      onClick={onDelete}
    />
  </div>
);

ContactBlock.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  }),
  onDelete: PropTypes.func
};

ContactBlock.defaultProps = {
  contact: { name: {} },
  onDelete: () => {}
};

export default ContactBlock;
