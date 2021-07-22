import { sortListActions } from '../actions';

const { UPDATE_LIST } = sortListActions;
const initialState = {
  totalBooks: 0,
  books: [],
  currentPage: 1
};

const sortList = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      const { data, current_page, total } = action.data;
      return {
        currentPage: current_page,
        books: data,
        totalBooks: total
      };
    default:
      return state;
  }
};

export default sortList;
