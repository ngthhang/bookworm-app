import { sortReviewListActions } from '../actions/sortReviewListAction';

const { UPDATE_LIST, UPDATE_LIST_FIRST } = sortReviewListActions;

const initState = {
  reviews: {},
  reviewsFirst: {}
};

const sortReviewList = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        reviews: action.data
      };
    case UPDATE_LIST_FIRST:
      return {
        ...state,
        reviewsFirst: action.data
      };
    default:
      return state;
  }
};

export default sortReviewList;
