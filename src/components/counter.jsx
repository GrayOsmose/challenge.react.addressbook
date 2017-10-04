import React from 'react';
import { connect } from 'react-redux';

import ReadMe from './readme';
import { increase, decrease } from '../actions/counter_actions';

const Counter = ({ dispatch, counter }) => (
  <div>
    <button onClick={() => dispatch(decrease())}>-</button>
    <div>{counter}</div>
    <button onClick={() => dispatch(increase())}>+</button>
    <ReadMe />
  </div>
);

export default connect(({ counter }) => ({
  counter
}))(Counter);
