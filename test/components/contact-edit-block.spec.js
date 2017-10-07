// Link.react-test.js
import React from 'react';
import { shallow } from 'enzyme';

import ContactEditBlock from '../../src/components/contact-edit-block';

describe('ContactEditBlock', function() {
  it('can render', function() {
    const component = shallow(
      <ContactEditBlock
        contact={{ id: 0, name: { first: '', last: '' } }}
        onSave={() => {}}
      />);
    expect(component).toMatchSnapshot();
  });
});
