// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';

import Disclaimer from '../disclaimer';

describe('Disclaimer', function() {
  it('can render', function() {
    const component = shallow(<Disclaimer />);
    expect(component).toMatchSnapshot();
  });
});
