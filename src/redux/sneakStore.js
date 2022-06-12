const ADD_ITEM = 'itemStore/ADD_ITEM';
const SEND_MESSAGE = 'itemStore/SEND_MESSAGE';

const initialState = {
  item: [],
  messageShow: false,
};

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const showMessage = (payload) => ({
  type: SEND_MESSAGE,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return { item: [...state.item, action.payload] };
  } if (action.type === SEND_MESSAGE) {
    return { ...state, messageShow: action.payload };
  }
  return state;
};

export default reducer;
