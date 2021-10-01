import * as types from '../action/types';

export const initialState = {
  userList: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      };

    case types.GET_USER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_USER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};
