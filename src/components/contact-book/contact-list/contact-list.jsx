import React from 'react';
import { connect } from 'react-redux';
import SearchBlock from './search-block/search-block';
import ContactBlock from './contact-block/contact-block';

import { deleteContact } from '../contact-book-actions';

const ContactList = ({ dispatch, filteredlist }) => (
  <div>
    <SearchBlock onSearch={dispatch()} />

    {
      filteredlist.map((contact) => (
        <ContactBlock
          contact={contact}
          onSelect={dispatch()}
          onDelete={dispatch(deleteContact(contact.id))}
        />
      ))
    }

  </div>
);

export default connect(({ filteredlist }) => ({
  filteredlist
}))(ContactList);
