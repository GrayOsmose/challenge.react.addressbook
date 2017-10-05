import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const ContactEditBlock = ({ id, name: { first, last }, onSave }) => {
  let name = { first, last };

  return (
    <Form horizontal>

      <FormGroup controlId="firstName">
        <ControlLabel>First Name</ControlLabel>
        <FormControl
          id="firstName"
          inputRef={ref => name.first = ref}
          defaultValue={first}
        />
      </FormGroup>

      <FormGroup controlId="lastName">
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          id="lastName"
          inputRef={ref => name.last = ref}
          defaultValue={last}
        />
      </FormGroup>

      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onSave({ id, name });
        }}
      >
        Save
      </Button>

    </Form>
  );
};

ContactEditBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string
  }),
  onSave: PropTypes.func
};

ContactEditBlock.defaultProps = {
  id: 0,
  name: {
    first: '',
    last: ''
  },
  onSave: () => {}
};

export default ContactEditBlock;
