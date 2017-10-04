import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import ReadMe from './readme';
import { increase, decrease } from '../actions/counter_actions';

const Counter = ({ dispatch, counter }) => (
  <div>
    <Button onClick={() => dispatch(decrease())}>-</Button>
    <div>{counter}</div>
    <Button onClick={() => dispatch(increase())}>+</Button>
    <ReadMe />
  </div>
);

export default connect(({ counter }) => ({
  counter
}))(Counter);
