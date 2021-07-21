import { cartActions } from '../actions';

const initialState = {
  totalCart: 0,
  cartList: []
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      state.cartList.push(action.item);
      return {
        totalCart: state.totalCart + 1,
        cartList: state.cartList
      };
    case cartActions.REMOVE_CART:
      return {
        totalCart: state.totalCart - 1,
        cartList: state.cartList.filter((item) => {
          return item.id !== action.id;
        })
      };
    case cartActions.ADD_QUANTITY_CART:
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          } else return item;
        })
      };
    case cartActions.MINUS_QUANTITY_CART:
      return {
        ...state,
        cartList: state.cartList.map((item) => {
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
