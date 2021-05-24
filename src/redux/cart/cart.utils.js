export const addItemToCart = (cartItems, item) => {
  console.log(cartItems, item)
  if (cartItems.find(cartItem => cartItem.id === item.id)) {
    return cartItems.map(cartItem => 
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [ ...cartItems, { ...item, quantity: 1} ];
};