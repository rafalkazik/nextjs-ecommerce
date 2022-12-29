interface CartItem {
  id: number;
  price: number;
  title: string;
  count: number;
}

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem('CART');
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const setCartItemsToStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('CART', JSON.stringify(cartItems));
};
