export const initialState = {
  id: 0,
  items: [],
};

const reducers = {
  setId(state, { payload: { id } }) {
    return {
      ...state,
      id,
    };
  },
  setItems(state, { payload: { items } }) {
    return {
      ...state,
      items,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  if (action.type) { return (reducers[action.type])(state, action); }
  return state;
}
