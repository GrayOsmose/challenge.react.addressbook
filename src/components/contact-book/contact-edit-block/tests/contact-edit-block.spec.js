// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ContactEditBlock from '../contact-edit-block';

describe('ContactEditBlock', function() {
  const mockStore = configureStore();

  it('can render', function() {
    const component = shallow(
      <ContactEditBlock
        contact={{ id: 0, name: { first: '', last: '' } }}
        onSave={() => {}}
      />);
    expect(component).toMatchSnapshot();
  });
});
