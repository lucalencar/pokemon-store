import TYPES from "../types/types";

export const addToCart = (index) => ({
    type: TYPES.ADD_TO_CART,
    payload: index,
})

export const removeFromCart = (index) => ({
    type: TYPES.REMOVE_FROM_CART,
    payload: index,
});

export const increment = (index) => ({
    type: TYPES.INCREMENT,
    payload: index,
})

export const decrement = (index) => ({
    type: TYPES.DECREMENT,
    payload: index,
})