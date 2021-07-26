export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  item
});

export const deleteFromCart = (id) => ({
  type: 'REMOVE_CART',
  id
});

export const addQuantity = (id, quantity) => ({
  type: 'ADD_QUANTITY_CART',
  id,
  quantity
});

export const minusQuantity = (id) => ({
  type: 'MINUS_QUANTITY_CART',
  id
});

export const deleteAll = () => ({
  type: 'DELETE_CART'
});

export const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_CART: 'REMOVE_CART',
  ADD_QUANTITY_CART: 'ADD_QUANTITY_CART',
  MINUS_QUANTITY_CART: 'MINUS_QUANTITY_CART',
  DELETE_CART: 'DELETE_CART'
};
