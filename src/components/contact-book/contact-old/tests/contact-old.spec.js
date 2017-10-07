// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ContactOld from '../contact-old';

describe('ContactOld', function() {
  const mockStore = configureStore();

  it('can render', function() {
    const component = shallow(
      <ContactOld
        match={{ params: { contactId: '0' } }}
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

  it('can be empty', function() {
    const component = shallow(
      <ContactOld
        match={{ params: { contactId: '1' } }}
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
