import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Cart from '../cart/Cart';

const CartContainer = () => {
  const items = useSelector((state) => state.itemReducer.item);
  console.log(items);

  return (
    <>
      {
        items.map((item) => (
          <Cart
            key={uuidv4()}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))
      }
    </>
  );
};

export default CartContainer;
