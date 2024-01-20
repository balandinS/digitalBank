import * as TYPES from './types';

const initState = {
  transactionStatus: 'pending',
};

export default (state = initState, {type, payload}) => {
  switch (type) {
    case TYPES.START_TRANSACTION:
      return {
        ...state,
        transactionStatus: 'start',
      };
    case TYPES.FAIL_TRANSACTION:
      return {
        ...state,
        transactionStatus: 'fail',
      };
    case TYPES.CLEAR_REDUCER_TRANSACTION:
      return {
        ...state,
        ...initState,
      };
    default:
      return state;
  }
};
