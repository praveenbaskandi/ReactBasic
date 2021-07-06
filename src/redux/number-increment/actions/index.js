import * as types from './types';

export const updateIncrement = payload => ({
  type: types.UPDATE_INCREMENT,
  payload,
});

export const updateIncrementData = data => async dispatch => {
  dispatch(updateIncrement(data));
};

export const updateIncrementText = payload => ({
  type: types.UPDATE_INCREMENT_TEXT,
  payload,
});

export const updateIncrementDataText = data => async dispatch => {
  dispatch(updateIncrementText(data));
};
