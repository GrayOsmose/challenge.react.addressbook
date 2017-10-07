// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';

import SearchBlock from '../search-block';

describe('SearchBlock', function() {
  it('can render', function() {
    const component = shallow(<SearchBlock onSearch={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
