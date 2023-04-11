import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  TOGGLE_HIDDEN_CART,
} from "./cart-actions";

import { addCartItem, removeCartItem } from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
      break;
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
      break;
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

      break;

    default:
      return state;
  }
};

export default cartReducer;
