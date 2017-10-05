import React from 'react';

const ContactInformation = ({ id, name: { first, second } }) => (
  <form className="form-inline">

    <div className="form-group">
      <label className="sr-only" for="firstName">First Name:</label>
      <span>{first}</span>
    </div>

    <div className="form-group">
      <label className="sr-only" for="pwd">Last Name:</label>
      <span>{second}</span>
    </div>

  </form>
);

export default ContactInformation;
