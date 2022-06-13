const ADD_ITEM = 'itemStore/ADD_ITEM';

const initialState = {
  item: [],
};

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return { item: [...state.item, action.payload] };
  }
  return state;
};

export default reducer;
