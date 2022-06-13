import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import style from './Cart.module.css';

const Cart = ({ detectClick }) => {
  const items = useSelector((state) => state.itemReducer.item);
  console.log('Detect', detectClick);
  const styles = {
    display: 'flex',
  };

  return (
    <>
      {
        items && items.length === 0
          ? (
            <section style={detectClick ? styles : null} className={style.cartModal}>
              <h1 className={style.cartHeading}>Cart</h1>
              <hr className={style.horiLine} />
              <div className={style.division}>
                <h2 className={style.cartHeadingThree}>Your Cart is Empty</h2>
              </div>
            </section>
          )
          : (
            <section className={style.cartModal}>
              <h1 className={style.cartHeading}>Cart</h1>
              <hr className={style.horiLine} />
              <div className={style.division}>
                { items.map((item) => (
                  <div key={uuidv4()} className={style.divisionTwo}>
                    <div className={style.dFlex}>
                      <img className={style.cartImage} src={item.imageUrl} alt={`sneaker-${uuidv4()}`} />
                      <div className={style.dFlexPrice}>
                        <h2 className={style.cartHeadingTwo}>{item.title}</h2>
                        <span className={style.cartPrice}>{`$${item.price} x ${item.quantity} = $${item.price * item.quantity}`}</span>
                      </div>
                    </div>
                    <p className={style.cartDelete}>delete</p>
                  </div>
                ))}
              </div>
              <button className={style.cartSubmit} type="button">
                Checkout
              </button>
            </section>
          )
      }
    </>
  );
};

Cart.propTypes = {
  detectClick: PropTypes.bool.isRequired,
};

export default Cart;
