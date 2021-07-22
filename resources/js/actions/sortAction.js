export const sortActions = {
  FILTER_BY_AUTHOR: 'FILTER_BY_AUTHOR',
  FILTER_BY_CATEGORY: 'FILTER_BY_CATEGORY',
  FILTER_BY_RATING: 'FILTER_BY_RATING',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SHOW_IN_PAGE: 'SHOW_IN_PAGE',
  CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE'
};

export const sortTypes = {
  SORT_BY_SALES: 'SORT_BY_SALES',
  SORT_BY_POPULAR: 'SORT_BY_POPULAR',
  SORT_BY_RECOMMENDED: 'SORT_BY_RECOMMENDED',
  SORT_BY_LOW_TO_HIGH: 'SORT_BY_LOW_TO_HIGH',
  SORT_BY_HIGH_TO_LOW: 'SORT_BY_HIGH_TO_LOW'
};

export const filterByAuthor = (author) => ({
  type: 'FILTER_BY_AUTHOR',
  author
});

export const filterByCategory = (category) => ({
  type: 'FILTER_BY_CATEGORY',
  category
});

export const filterByRating = (rating) => ({
  type: 'FILTER_BY_RATING',
  rating
});

export const setSortType = (sort) => ({
  type: 'SET_SORT_TYPE',
  sort
});

export const setShowPage = (number) => ({
  type: 'SHOW_IN_PAGE',
  number
});

export const changeCurrentPage = (number) => ({
  type: 'CHANGE_CURRENT_PAGE',
  number
});
