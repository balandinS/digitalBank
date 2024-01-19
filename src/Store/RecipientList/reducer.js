import * as TYPES from './types';

const initialState = {
  recipientList: null,
  error: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPES.SET_RECIPIENT_LIST:
      return {...state, recipientList: payload};
    case TYPES.SET_RECIPIENT_LIST:
      return {...state, recipientList: null, error: true};

    default:
      return state;
  }
};
