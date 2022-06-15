import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import style from './Cart.module.css';

const Cart = ({ detect }) => {
  const items = useSelector((state) => state.itemReducer.item);
  const styles = {
    display: 'flex',
    border: '1px solid orange',
  };

  return (
    <>
      {
        items && items.length === 0
          ? (
            <div className={style.centerDiv}>
              <section style={detect ? styles : null} className={style.cartModal}>
                <h1 className={style.cartHeading}>Cart</h1>
                <hr className={style.horiLine} />
                <div className={style.division}>
                  <h2 className={style.cartHeadingThree}>Your Cart is Empty</h2>
                </div>
              </section>
            </div>

          )
          : (
            <div className={style.centerDiv}>
              <section style={detect ? styles : null} className={style.cartModal}>
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
                      <p className={style.cartDelete}><BiTrash size={20} color="#c3cad9" /></p>
                    </div>
                  ))}
                </div>
                <button className={style.cartSubmit} type="button">
                  Checkout
                </button>
              </section>
            </div>
          )
      }
    </>
  );
};

Cart.propTypes = {
  detect: PropTypes.bool.isRequired,
};

export default Cart;
