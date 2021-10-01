import {errorHandler} from '../../helpers';
import {getListOfUserApi} from '../../../http/ApiPage';
import * as types from './types';

const getUserListRequest = payload => ({
  type: types.GET_USER_LIST_REQUEST,
  payload,
});

const getUserListSuccess = payload => ({
  type: types.GET_USER_LIST_SUCCESS,
  payload,
});

const getUserListFailure = payload => ({
  type: types.GET_USER_LIST_FAILURE,
  payload,
});

export const getUserList = () => async (dispatch, getState) => {
  const {errors} = getState().locale.translations.data;
  dispatch(getUserListRequest());
  try {
    const response = await getListOfUserApi();
    dispatch(getUserListSuccess(response));
  } catch (error) {
    errorHandler({onFailure: getUserListFailure, error, errors, dispatch});
  }
};
