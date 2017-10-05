import {
  CONTACT_BOOK_ADD,
  CONTACT_BOOK_EDIT,
  CONTACT_BOOK_DELETE
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
