import * as TYPES from './types';
export const setUserAction = payload => ({
  type: TYPES.SET_USER_DATA,
  payload,
});
export const setErrorUserData = () => ({
  type: TYPES.ERROR_USER_DATA,
});

export const fetchUserData = () => async dispatch => {
  try {
    const response = await fetch('https://api.npoint.io/3fc8f279899456907de0');
    const data = await response.json();
    if (response.ok) {
      dispatch(setUserAction(data));
    } else {
      dispatch(setErrorUserData());
    }
  } catch (error) {
    dispatch(setErrorUserData());
  }
};
