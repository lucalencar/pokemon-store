import TYPES from "../types/types";

const INITIAL_STATE = {
  items: [],
  total: 0,
};
//reducer para puxar a action de adicionar o carrinho e retornar um novo state
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const updatedCart = [...state.items];
      const index = updatedCart.findIndex(x => x.id === action.payload.id);
      if (index >= 0) {
        const pokemon = updatedCart[index];
        updatedCart[index] = { ...pokemon, quantity: pokemon.quantity + 1 };
      }
      else {
        updatedCart.push(action.payload);
      }
      return {
        ...state,
        items: updatedCart,
        total: updatedCart.length,
      }
    }
//reducer para puxar a action de remover o carrinho e retornar um novo state
    case TYPES.REMOVE_FROM_CART: {
      const updatedCart = [...state.items];
      const index = updatedCart.findIndex(x => x.id === action.payload.id);
      if (index > -1) {
        const pokemon = updatedCart[index];
        updatedCart.splice(pokemon, 1);
      }
      return {
        ...state,
        items: updatedCart,
        total: updatedCart.length
      }
    }
//reducer para puxar a action de incrementar a quantidade do item no carrinho e retornar um novo state
    case TYPES.INCREMENT: {
      const { payload } = action;
      const item = state.items.find(
        product => product.id === payload);
      if (item) {
        return {
          ...state,
          items: state.items.map(item => item.id === payload
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, item]
      };
    }
//reducer para puxar a action de diminuir a quantidade do item no carrinho e retornar um novo state
    case TYPES.DECREMENT: {
      const { payload } = action;
      const item = state.items.find(
        product => product.id === payload);
      if (item) {
        return {
          ...state,
          items: state.items.map(item => item.id === payload
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, item]
      };
    }
    default: {
      return state
    }
  }
};

export default CartReducer;