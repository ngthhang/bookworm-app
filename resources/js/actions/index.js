export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  item
});

export const deleteFromCart = (id) => ({
  type: 'REMOVE_CART',
  id
});

export const addQuantity = (id) => ({
  type: 'ADD_QUANTITY_CART',
  id
});

export const minusQuantity = (id) => ({
  type: 'MINUS_QUANTITY_CART',
  id
});

export const VisibilityFilters = {
  SHOW_POPULAR: 'SHOW_POPULAR',
  SHOW_RECOMMENDED: 'SHOW_RECOMMENDED'
};

export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_CART: 'REMOVE_CART',
  ADD_QUANTITY_CART: 'ADD_QUANTITY_CART',
  MINUS_QUANTITY_CART: 'MINUS_QUANTITY_CART'
};
