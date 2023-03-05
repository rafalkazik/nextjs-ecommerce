import { useCartState } from '../components/Cart/CartBar';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CartContent = () => {
  const cartState = useCartState();

  const pay = async () => {
    const stripe = await stripePromise;

    if (!stripe) {
      throw new Error('Stripe not loaded');
    }

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        cartState.items.map((cartItem) => {
          return {
            price_data: {
              currency: 'PLN',
              unit_amount: cartItem.price * 100,
              product_data: { name: cartItem.title },
            },
            quantity: cartItem.count,
          };
        })
      ),
    });

    const session: {
      id: string;
      session: Stripe.Response<Stripe.Checkout.Session>;
    } = await res.json();
    // @ts-ignore
    await stripe.redirectToCheckout({ sessionId: session.id.id });
  };

  return (
    <div className='col-span-2'>
      <ul className='divide-y divide-gray-200'>
        {cartState.items.map((item, index) => (
          <li key={index} className='py-4'>
            <div className='flex justify-between'>
              <div>
                {item.count} x {item.title}
              </div>
              <div className='flex gap-2'>
                {item.price} PLN
                <button
                  onClick={() => {
                    cartState.removeItemFromCart(item.id);
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='#E54A4B'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        type='button'
        onClick={pay}
        className='block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg'
      >
        Zamów
      </button>
    </div>
  );
};

const CartSummary = () => {
  const cartState = useCartState();
  return (
    <div>
      Podsumowanie koszyka
      <div>
        <p className='font-bold'>Liczba elementów: {cartState.items.length}</p>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className='mx-auto flex-col max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8'>
      <p className='text-4xl font-bold mt-5 mb-10'>Cart</p>
      <div className='grid grid-cols-3 gap-8'>
        <CartContent />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
