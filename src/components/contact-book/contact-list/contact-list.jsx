import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBlock from './search-block/search-block';
import ContactBlock from './contact-block/contact-block';

import { searchContacts } from '../contact-book-actions';

const ContactList = ({ dispatch, list, filter }) => {
  // simple filtration for now, better to move to testable function later on
  const filteredList = list.filter(({ name: { first, last } }) =>
    first.includes(filter) ||
    last.includes(last));

  return (
    <div>
      <SearchBlock onSearch={(search) => dispatch(searchContacts(search))} />

      {
        filteredList.map((contact, index) => (
          <Link key={index} to={`/view/${contact.id}`}>
            <ContactBlock
              contact={contact}
            />
          </Link>
        ))
      }

    </div>
  );
};

ContactList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string
    })
  })).isRequired,
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
