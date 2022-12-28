import Link from 'next/link';
import { useContext } from 'react';
import { CartStateContext } from './CartContext';

export const CartBar = () => {
  const cartState = useCartState();

  return (
    <Link href='/cart'>
      <a className='flex items-center gap-1 border-b-4 border-transparent p-6 hover:border-indigo-700'>
        <span className=''>{cartState.items.length}</span>
        <svg
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
          />
        </svg>

        <span className='sr-only'>Cart</span>
      </a>
    </Link>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);

  if (!cartState) {
    throw new Error('You forgot CartStateContextProvider');
  }

  return cartState;
};
