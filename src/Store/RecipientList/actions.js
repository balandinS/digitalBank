import * as TYPES from './types';
export const setRecipientList = payload => ({
  type: TYPES.SET_RECIPIENT_LIST,
  payload,
});
export const setErrorRecipientList = () => ({
  type: TYPES.ERROR_RECIPIENT_LIST,
});

export const fetchRecipientList = () => async dispatch => {
  try {
    const response = await fetch('https://api.npoint.io/76e59c76f1d150e47618');
    const data = await response.json();

    if (response.ok) {
      dispatch(setRecipientList(data));
    } else {
      dispatch(setErrorRecipientList());
    }
  } catch (error) {
    dispatch(setErrorRecipientList());
  }
};
