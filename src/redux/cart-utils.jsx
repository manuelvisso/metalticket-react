export const addItemToCart = (cartItems, ticket) => {
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

export const removeItemFromCart = (cartItems, id) => {
  const itemToRemove = cartItems.find((item) => item.id === id);

  if (itemToRemove.quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};
