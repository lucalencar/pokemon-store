import _ from "lodash";

const DefaultState = {
  loading: false,
  count: 0,
  results: [],
  errorMsg: "",
};

const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };

    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        /* results: state.results.concat(action.payload.results), */
        results: _.uniqWith(
          state.results.concat(action.payload.results),
          _.isEqual
        ),
        errorMsg: "",
      };

    case "RESET_LIST":
      return {
        loading: false,
        count: 0,
        results: [],
        errorMsg: "",
      };

    default:
      return state;
  }
};

export default PokemonListReducer;
