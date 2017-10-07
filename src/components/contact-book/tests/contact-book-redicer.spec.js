import reducer from '../contact-book-reducer';
import { deleteContact, addContact, editContact, searchContacts } from '../contact-book-actions';

describe('Contact book reducer', function() {
  it('can add', function() {
    const currentState = {
      list: []
    };
    const contact = { id: 0, name: {} };
    const newState = reducer(currentState, addContact(contact));

    expect(newState).toEqual({
      list: [
        contact
      ]
    });
  });

  it('can edit', function() {
    const currentState = {
      list: [
        { id: 100, name: { first: 'Bruce' } },
        { id: 101, name: { first: 'Dick', last: 'Grayson' } }
      ]
    };
    const contactChange = { id: 100, name: { first: 'Batman' } };
    const newState = reducer(currentState, editContact(contactChange));

    expect(newState).toEqual({
      list: [
        contactChange,
        { id: 101, name: { first: 'Dick', last: 'Grayson' } }
      ]
    });
  });

  it('can delete', function() {
    const id = 100;
    const currentState = {
      list: [{ id, name: { first: 'Joker' } }]
    };
    const newState = reducer(currentState, deleteContact(id));

    expect(newState).toEqual({
      list: []
    });
  });

  it('can search', function() {
    const currentState = {
      search: ''
    };
    const search = 'new search';
    const newState = reducer(currentState, searchContacts(search));

    expect(newState).toEqual({
      search
    });
  });

  it('can ignore', function() {
    const currentState = {
      list: [],
      search: ''
    };
    const newState = reducer(currentState, {});

    expect(newState).toEqual(currentState);
  });
});
