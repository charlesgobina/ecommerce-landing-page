import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BiTrash } from 'react-icons/bi';
import { deleteItem } from '../../redux/sneakStore';
import style from '../cart/Cart.module.css';

const Trash = ({ id }) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(deleteItem(id));
  };
  return (
    <BiTrash onClick={removeItem} className={style.cartDelete} size={35} color="#c3cad9" />
  );
};

Trash.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Trash;
