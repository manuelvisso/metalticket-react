import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_HIDDEN_CART,
} from "./cart-actions";

import { addItemToCart, removeItemFromCart } from "./cart-utils";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
      break;
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
      break;
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

      break;

    default:
      break;
  }
};

export default cartReducer;
