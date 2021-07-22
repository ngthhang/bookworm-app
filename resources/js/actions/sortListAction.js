export const sortListActions = {
  CHANGE_CURRENT_PAGE: 'CHANGE_CURRENT_PAGE',
  UPDATE_LIST: 'UPDATE_LIST'
};

export const changeCurrentPage = (number) => ({
  type: 'CHANGE_CURRENT_PAGE',
  number
});

export const updateList = (data) => ({
  type: 'UPDATE_LIST',
  data
});
