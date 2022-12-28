import { createContext, ReactNode, useState } from 'react';

interface CartItem {
  price: number;
  title: string;
}

interface CartState {
  items: CartItem[];
}

export const CartStateContext = createContext<CartState | null>(null);

export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { price: 21, title: 'T-shirt' },
    { price: 21, title: 'T-shirt' },
    { price: 21, title: 'T-shirt' },
    { price: 21, title: 'T-shirt' },
  ]);

  return (
    <CartStateContext.Provider value={{ items: cartItems }}>
      {children}
    </CartStateContext.Provider>
  );
};
