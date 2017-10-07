// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ContactList from '../../src/components/contact-list';

describe('ContactList', function() {
  const mockStore = configureStore();

  it('can render', function() {
    const component = shallow(
      <ContactList
        store={
          mockStore({
            contactBook: {
              search: '',
              list: [{ id: 0, name: { first: '', last: '' } }]
            }
          })
        }
      />);
    expect(component).toMatchSnapshot();
  });
});
