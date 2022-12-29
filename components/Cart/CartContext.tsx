import { createContext, ReactNode, useEffect, useState } from 'react';
import { getCartItemsFromStorage, setCartItemsToStorage } from './cartModel';

interface CartItem {
  id: number;
  price: number;
  title: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: CartItem['id']) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
    console.log(getCartItemsFromStorage());
  }, []);

  useEffect(() => {
    if (cartItems === undefined) {
      return;
    }
    setCartItemsToStorage(cartItems);
  }, [cartItems]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems || [],
        addItemToCart: (item) => {
          setCartItems((cartItems = []) => {
            const existingItem = cartItems.find(
              (existingItem) => existingItem.id === item.id
            );

            if (!existingItem) {
              return [...cartItems, item];
            }

            return cartItems.map((existingItem) => {
              return existingItem.id === item.id
                ? { ...existingItem, count: existingItem.count + 1 }
                : existingItem;
            });
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((cartItems = []) => {
            const existingItem = cartItems.find(
              (existingItem) => existingItem.id === id
            );

            if (existingItem && existingItem.count <= 1) {
              return cartItems.filter((existingItem) => existingItem.id !== id);
            }

            return cartItems.map((existingItem) => {
              return existingItem.id === id
                ? { ...existingItem, count: existingItem.count - 1 }
                : existingItem;
            });
          });
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};
