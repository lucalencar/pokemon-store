const PageReducer = (state = 1, action) => {
  switch (action.type) {
    case "PAGE_NEXT":
      return action.payload;
    case "PAGE_RESET":
      return 1;
    default:
      return state;
  }
};

export default PageReducer;
