import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const ContactBlock = ({ contact: { id, name: { first, last } }, onDelete }) => (
  <div>

    <span>{first} {last}</span>
    <Button onClick={onDelete}>
      <span className="glyphicon glyphicon-trash" />
    </Button>

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
