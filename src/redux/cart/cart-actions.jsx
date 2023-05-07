export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const SUBTRACT_CART_ITEM = "SUBTRACT_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const TOGGLE_HIDDEN_CART = "TOGGLE_HIDDEN_CART";
export const CLEAR_CART_ITEMS = "CLEAR_CART_ITEMS";

export const addCartItem = (ticket) => ({
  type: ADD_CART_ITEM,
  payload: ticket,
});

export const subtractCartItem = (ticket) => ({
  type: SUBTRACT_CART_ITEM,
  payload: ticket,
});

export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id });

export const toggleHiddenCart = () => ({ type: TOGGLE_HIDDEN_CART });

export const clearCartItems = () => ({ type: CLEAR_CART_ITEMS });
