import TYPES from "../types/types";

export const increaseAction = (payload) => ({
  type: TYPES.increase,
  payload: payload,
});

export const decreaseAction = (payload) => ({
  type: "DECREASE",
  payload: payload,
});