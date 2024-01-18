import * as TYPES from './types';
const initialState = {
  user: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.ERROR_USER_DATA:
      return {
        ...state,
        user: null,
        error: true,
      };

    default:
      return state;
  }
};
