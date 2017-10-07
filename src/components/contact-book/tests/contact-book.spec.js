// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';

import ContactBook from '../contact-book';

describe('ContactBook', function() {
  it('can render', function() {
    const component = shallow(<ContactBook />);
    expect(component).toMatchSnapshot();
  });
});
