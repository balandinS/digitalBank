import {combineReducers} from 'redux';
import HomeScreenReducer from './HomeScreen/reducer';
import RecipientListReducer from './RecipientList/reducer';
import TransactionReducer from './Transactions/reducer';
export default combineReducers({
  HomeScreenReducer,
  RecipientListReducer,
  TransactionReducer,
});
