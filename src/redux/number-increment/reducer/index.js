import * as types from '../actions/types';

export const initialState = {
  incrementData: 0,
  incrementText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INCREMENT: {
      return {
        ...state,
        incrementData: action.payload,
      };
    }

    case types.UPDATE_INCREMENT_TEXT: {
      return {
        ...state,
        incrementText: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
