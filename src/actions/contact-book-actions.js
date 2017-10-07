import {
  CONTACT_BOOK_ADD,
  CONTACT_BOOK_EDIT,
  CONTACT_BOOK_DELETE,
  CONTACT_BOOK_SEARCH
} from '../constants/action-types';

export const deleteContact = (id) => ({
  type: CONTACT_BOOK_DELETE,
  id
});

export const addContact = (contact) => ({
  type: CONTACT_BOOK_ADD,
  contact
});

export const editContact = (contact) => ({
  type: CONTACT_BOOK_EDIT,
  contact
});

export const searchContacts = (search) => ({
  type: CONTACT_BOOK_SEARCH,
  search
});
