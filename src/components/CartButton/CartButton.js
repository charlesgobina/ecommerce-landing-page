import PropTypes from 'prop-types';
import { ReactComponent as Cart } from '../../images/icon-cart.svg';
import './CartButton.css';

const CartButton = ({ setDetect }) => {
  const handleClick = () => {
    setDetect((prev) => !prev);
  };

  return (
    <button type="button">
      <Cart onClick={handleClick} />
    </button>
  );
};

CartButton.propTypes = {
  setDetect: PropTypes.func.isRequired,
};

export default CartButton;
