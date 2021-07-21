import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import cart from './cart';

export default combineReducers({
  visibilityFilter,
  cart
});
