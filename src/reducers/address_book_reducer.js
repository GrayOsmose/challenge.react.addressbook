import {
  ADDRESS_BOOK_ADD,
  ADDRESS_BOOK_EDIT,
  ADDRESS_BOOK_DELETE
} from '../constants/action_types';

const initialState = {
  list: [],
  current: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;

    case DECREASE_COUNTER:
      return state - 1;

    default:
      return state;
  }
}
