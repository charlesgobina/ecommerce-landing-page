import PropTypes from 'prop-types';
import './Message.css';

const Message = (props) => {
  const { click } = props;
  return (
    <>
      { click
        ? <p className="messager">Item added successfully!</p>
        : ''}
    </>
  );
};

Message.propTypes = {
  click: PropTypes.bool.isRequired,
};

export default Message;
