// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';

import ContactBlock from '../contact-block';

describe('ContactBlock', function() {
  it('can render', function() {
    const component = shallow(<ContactBlock contact={{ id: 0, name: { first: '', last: '' } }} />);
    expect(component).toMatchSnapshot();
  });
});
