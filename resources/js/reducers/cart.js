import { cartActions } from '../actions';

const initialState = {
  totalCart: 0,
  cartList: []
};

const {
  ADD_TO_CART,
  REMOVE_CART,
  ADD_QUANTITY_CART,
  MINUS_QUANTITY_CART,
  DELETE_CART
} = cartActions;

const cart = (state = initialState, action) => {
  const { cartList, totalCart } = state;
  switch (action.type) {
    case ADD_TO_CART:
      cartList.push(action.item);
      return {
        totalCart: totalCart + 1,
        cartList: cartList
      };
    case REMOVE_CART:
      return {
        totalCart: totalCart - 1,
        cartList: cartList.filter((item) => {
          return item.id !== action.id;
        })
      };
    case DELETE_CART:
      return {
        ...initialState
      };
    case ADD_QUANTITY_CART:
      return {
        ...state,
        cartList: cartList.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + action.quantity
            };
          } else return item;
        })
      };
    case MINUS_QUANTITY_CART:
      return {
        ...state,
        cartList: cartList.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            };
          } else return item;
        })
      };
    default:
      return state;
  }
};

export default cart;
