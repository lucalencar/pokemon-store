import TYPES from "../types/types";


export const addToCart = (index) => ({
    type: TYPES.ADD_TO_CART,
    payload: {
        id: index,
    }
})

export const removeFromCart = (index) => ({
    type: TYPES.REMOVE_FROM_CART,
    payload: {
        id: index,
    }
});