import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import clients from './clients';
import users from './users';
import books from './books';

export default combineReducers({
  form: reduxFormReducer,
  clients,
  users,
  books
});
