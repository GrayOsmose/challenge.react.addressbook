import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBlock from './search-block/search-block';
import ContactBlock from './contact-block/contact-block';

import { searchContacts, deleteContact } from '../contact-book-actions';

const ContactList = ({ dispatch, list, filter }) => {
  // simple filtration for now, better to move to testable function later on
  const filteredList = list.filter(({ name: { first, last } }) =>
    first.contains(filter) ||
    last.contains(last));

  return (
    <div>
      <SearchBlock onSearch={(search) => dispatch(searchContacts(search))} />

      {
        filteredList.map((contact) => (
          <ContactBlock
            contact={contact}
            onSelect={() => {}}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        ))
      }

    </div>
  );
};

ContactList.propTypes = {
  dispatch: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })),
  search: PropTypes.string
};

ContactList.defaultProps = {
  dispatch: () => {},
  list: [],
  search: ''
};

export default connect(({ contactBook: { list, search } }) => ({
  list,
  search
}))(ContactList);
