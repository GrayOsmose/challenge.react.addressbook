import {
  CONTACT_BOOK_ADD,
  CONTACT_BOOK_EDIT,
  CONTACT_BOOK_DELETE,
  CONTACT_BOOK_SEARCH
} from '../constants/action-types';

const initialState = {
  list: [],
  search: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CONTACT_BOOK_ADD:
      // just for tests
      if (!action.contact.id) {
        action.contact.id = Math.floor(Math.random() * 1000000000);
      }
      return {
        ...state,
        list: [
          ...state.list,
          action.contact
        ]
      };

    case CONTACT_BOOK_EDIT:
      return {
        ...state,
        list: state.list.map((contact) => contact.id === action.contact.id ?
          action.contact :
          contact)
      };

    case CONTACT_BOOK_DELETE:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== action.id)
      };

    case CONTACT_BOOK_SEARCH:
      return {
        ...state,
        search: action.search
      };

    default:
      return state;
  }
}
