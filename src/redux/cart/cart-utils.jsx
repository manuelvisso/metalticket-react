export const addCartItem = (cartItems, ticket) => {
  const ticketInCart = cartItems.find((item) => item.id === ticket.id);

  if (ticketInCart) {
    return cartItems.map((item) =>
      item.id === ticketInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...ticket, quantity: 1 }];
};

export const subtractCartItem = (cartItems, ticket) => {
  const ticketInCart = cartItems.find((item) => item.id === ticket.id);

  if (ticketInCart.quantity > 1) {
    return cartItems.map((item) =>
      item.id === ticketInCart.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== ticketInCart.id);
};

export const removeCartItem = (cartItems, id) => {
  const itemToRemove = cartItems.find((item) => item.id === id);

  return cartItems.filter((item) => item.id !== itemToRemove.id);
};
