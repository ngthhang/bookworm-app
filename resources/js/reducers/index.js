import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import cart from './cart';
import sort from './sort';
import sortList from './sortList';
import sortReview from './sortReview';
import sortReviewList from './sortReviewList';

export default combineReducers({
  visibilityFilter,
  cart,
  sort,
  sortList,
  sortReview,
  sortReviewList
});
