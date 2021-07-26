import { sortActions, sortTypes } from '../actions';

const {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_RATING,
  SET_SORT_TYPE,
  SHOW_IN_PAGE,
  CHANGE_CURRENT_PAGE,
  SET_INIT
} = sortActions;

const { SORT_BY_SALES } = sortTypes;

const initialState = {
  author: null,
  category: null,
  rating: null,
  sortType: SORT_BY_SALES,
  perPage: 20,
  currentPage: 1
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_AUTHOR:
      return {
        ...state,
        author: action.author,
        currentPage: 1
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.category,
        currentPage: 1
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        rating: action.rating,
        currentPage: 1
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.sort,
        currentPage: 1
      };
    case SHOW_IN_PAGE:
      return {
        ...state,
        perPage: action.number,
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
    default:
      return state;
  }
};

export default sort;
