import React from 'react';
import { connect } from 'react-redux';

const ContactList = () => (
  <div>
    List
  </div>
);

export default connect(({ list }) => ({
  list
}))(ContactList);
