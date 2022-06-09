const ADD_ITEM = 'itemStore/ADD_ITEM';

const initialState = [];

export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  if (action.type === ADD_ITEM) {
    return [...state];
  }
  return null;
};

export default reducer;
