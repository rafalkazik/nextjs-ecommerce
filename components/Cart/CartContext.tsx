import { createContext, ReactNode, useState } from 'react';

interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((cartItems) => [...cartItems, item]);
        },
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};
