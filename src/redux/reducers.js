import {combineReducers} from 'redux';

import numberIncrement from './number-increment/reducer';
import apiRequestPage from './api-request-page/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    numberIncrement,
    apiRequestPage,

    // Legacy
    locale,
  });
