import TYPES from "../types/types";

const INITIAL_STATE = {
  // items: [{
  //   id: 0,
  //   name: "",
  //   price: 0,
  //   image: '',
  // }],
  items: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  let items = [];

  switch (action.type) {
    case TYPES.ADD_TO_CART:
      items = state.items;
      items.push(action.payload.id);
      return { ...state, items: items };
    case TYPES.REMOVE_FROM_CART:
      items = state.items;
      const index = items.indexOf(action.payload.id);
      if (index > -1) {
        items.splice(index, 1);
      }
      return { ...state, items: items };

    default:
      return state;
  }
};

export default CartReducer;