import * as TYPES from './types';

const failTransactions = () => ({
  type: TYPES.FAIL_TRANSACTION,
});
const startTransactions = () => ({
  type: TYPES.START_TRANSACTION,
});
export const startTransaction = () => async dispatch => {
  dispatch(startTransactions());
  await setTimeout(() => {
    dispatch(failTransactions());
  }, 400);
};
export const clearReducer = () => ({
  type: TYPES.CLEAR_REDUCER_TRANSACTION,
});
