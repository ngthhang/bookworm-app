import { sortReviewActions } from '../actions';

const {
  SET_FILTER,
  SHOW_IN_PAGE,
  SORT_BY_DATE,
  CHANGE_CURRENT_PAGE,
  SET_INIT,
  UPDATE_REVIEW
} = sortReviewActions;

const initialState = {
  filter: 'all',
  sortType: 'NEW_TO_OLD',
  showInPage: 20,
  currentPage: 1,
  updateReview: false
};

const sortReview = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filterType,
        currentPage: 1
      };
    case SHOW_IN_PAGE:
      return {
        ...state,
        showInPage: action.number,
        currentPage: 1
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortType: action.sortType,
        currentPage: 1
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.number
      };
    case SET_INIT:
      return {
        ...initialState
      };
    case UPDATE_REVIEW:
      return {
        ...state,
        updateReview: action.updateReview
      };
    default:
      return state;
  }
};

export default sortReview;
