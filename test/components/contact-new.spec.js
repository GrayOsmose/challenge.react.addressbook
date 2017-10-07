// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ContactNew from '../../src/components/contact-new';

describe('ContactNew', function() {
  const mockStore = configureStore();

  it('can render', function() {
    const component = shallow(<ContactNew store={mockStore({})} />);
    expect(component).toMatchSnapshot();
  });
});
