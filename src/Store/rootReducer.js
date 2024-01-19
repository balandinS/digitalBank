import {combineReducers} from 'redux';
import HomeScreenReducer from './HomeScreen/reducer';
import RecipientListReducer from './RecipientList/reducer';
export default combineReducers({
  HomeScreenReducer,
  RecipientListReducer,
});
