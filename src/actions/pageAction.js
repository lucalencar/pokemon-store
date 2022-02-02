export const NextPage = () => (dispatch, getState) => {
  const next = getState().Page + 1;
  console.log(`getState : ${getState().Page}`);
  console.log(`next : ${next}`);
  dispatch({
    type: "PAGE_NEXT",
    payload: next,
  });
};

export const PageReset = () => {
  return {
    type: "PAGE_RESET",
  };
};
