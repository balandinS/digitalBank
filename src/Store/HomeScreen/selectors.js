export const userDataSelector = state => state.HomeScreenReducer.user;
export const userDataErrorSelector = state => state.HomeScreenReducer.error;
export const userAccountNumberSelector = state =>
  state.HomeScreenReducer.user?.acount; //cspell: disable-line
