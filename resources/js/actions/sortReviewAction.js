export const sortReviewActions = {
  SET_FILTER: 'SET_FILTER',
  SHOW_IN_PAGE: 'SHOW_IN_PAGE',
  SORT_BY_DATE: 'SORT_BY_DATE',
  CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE'
};

export const changePageInReview = (number) => ({
  type: 'CHANGE_CURRENT_PAGE',
  number
});

export const setFilter = (filterType) => ({
  type: 'SET_FILTER',
  filterType
});

export const setPerPage = (number) => ({
  type: 'SHOW_IN_PAGE',
  number
});

export const sortByDate = (sortType) => ({
  type: 'SORT_BY_DATE',
  sortType
});
