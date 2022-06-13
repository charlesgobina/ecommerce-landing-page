import PropTypes from 'prop-types';
import { ReactComponent as Cart } from '../../images/icon-cart.svg';

const CartButton = ({ setDetectClick }) => {
  const handleClick = () => {
    setDetectClick((prev) => !prev);
  };

  return (
    <button type="button">
      <Cart onClick={handleClick} />
    </button>
  );
};

CartButton.propTypes = {
  setDetectClick: PropTypes.func.isRequired,
};

export default CartButton;
