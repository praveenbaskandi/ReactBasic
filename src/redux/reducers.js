import {combineReducers} from 'redux';

import numberIncrement from './number-increment/reducer';

export default () =>
  combineReducers({
    numberIncrement,
  });
