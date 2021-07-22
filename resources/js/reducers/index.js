import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import cart from './cart';
import sort from './sort';
import sortList from './sortList';

export default combineReducers({
  visibilityFilter,
  cart,
  sort,
  sortList
});
