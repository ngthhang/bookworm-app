import { sortReviewActions } from '../actions';

const { SET_FILTER, SHOW_IN_PAGE, SORT_BY_DATE, CHANGE_CURRENT_PAGE } =
  sortReviewActions;
const initialState = {
  filter: 'all',
  sortType: 'NEW_TO_OLD',
  showInPage: 20,
  currentPage: 1
};

const sortReview = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filterType
      };
    case SHOW_IN_PAGE:
      return {
        ...state,
        showInPage: action.number
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortType: action.sortType
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.number
      };
    default:
      return state;
  }
};

export default sortReview;
