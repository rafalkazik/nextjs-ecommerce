import { useCartState } from '../components/Cart/CartBar';

const CartPage = () => {
  const cartState = useCartState();

  return (
    <div>
      <ul>
        {cartState.items.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
