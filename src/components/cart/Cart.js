import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './Cart.module.css';

const Cart = (props) => {
  const {
    title, quantity, price, imageUrl,
  } = props;
  return (
    <section className={style.cartModal}>
      <h1 className={style.cartHeading}>Cart</h1>
      <div className={style.division}>
        <div className={style.divisionTwo}>
          <div className={style.dFlex}>
            <img className={style.cartImage} src={imageUrl} alt={`sneaker-${uuidv4()}`} />
            <div className={style.dFlexPrice}>
              <h2 className={style.cartHeadingTwo}>{title}</h2>
              <span className={style.cartPrice}>{`${price} x ${quantity} = ${price * quantity}`}</span>
            </div>
          </div>
          <p className="cartDelete">delete</p>
        </div>
      </div>
      <button className={style.cartSubmit} type="button">
        Checkout
      </button>
    </section>
  );
};

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Cart;
