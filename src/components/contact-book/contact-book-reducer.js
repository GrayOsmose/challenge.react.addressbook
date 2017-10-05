import {
  CONTACT_BOOK_ADD,
  CONTACT_BOOK_EDIT,
  CONTACT_BOOK_DELETE,
  CONTACT_BOOK_FILTER
} from './constants';

const initialState = {
  list: [],
  current: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
