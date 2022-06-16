const ADD_ITEM = 'itemStore/ADD_ITEM';
const DELETE_ITEM = 'itemStore/DELETE_ITEM';

const initialState = {
  item: [],
};

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { item: [...state.item, action.payload] };
    case DELETE_ITEM:
      return { item: state.item.filter((singleItem) => singleItem.id !== action.payload) };
    default:
      return state;
  }
};

export default reducer;
