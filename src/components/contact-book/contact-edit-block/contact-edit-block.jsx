import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const ContactEditBlock = ({
  contact: {
    id,
    name: { first, last } },
    onSave
  }) => {
  let firstInput, lastInput;

  const getName = () => ({
    first: firstInput.value,
    last: lastInput.value
  });

  return (
    <Form horizontal>

      <FormGroup controlId="firstName">
        <ControlLabel>First Name</ControlLabel>
        <FormControl
          id="firstName"
          inputRef={ref => firstInput = ref}
          defaultValue={first}
        />
      </FormGroup>

      <FormGroup controlId="lastName">
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          id="lastName"
          inputRef={ref => lastInput = ref}
          defaultValue={last}
        />
      </FormGroup>

      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onSave({ id, name: getName() });
        }}
      >
        Save
      </Button>

    </Form>
  );
};

ContactEditBlock.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  }),
  onSave: PropTypes.func.isRequired
};

ContactEditBlock.defaultProps = {
  // just for tests
  contact: {
    id: 0,
    name: {
      first: '',
      last: ''
    }
  },
  onSave: () => {}
};

export default ContactEditBlock;
