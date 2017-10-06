import {
  CONTACT_BOOK_ADD,
  CONTACT_BOOK_EDIT,
  CONTACT_BOOK_DELETE,
  CONTACT_BOOK_SEARCH
} from './constants';

const initialState = {
  list: [],
  search: ''
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CONTACT_BOOK_ADD:
      return {
        ...state,
        list: [ ...state.list, action.contact ]
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
