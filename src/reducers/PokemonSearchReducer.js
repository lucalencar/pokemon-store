import _ from "lodash";

const DefaultState = {
  loading: false,
  count: 0,
  results: [],
  errorMsg: "",
};

const PokemonSearchReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_SEARCH_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };

    case "POKEMON_SEARCH_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon",
      };

    case "POKEMON_SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        count: action.payload.count,
        results: action.payload.results,
        errorMsg: "",
      };

    default:
      return state;
  }
};

export default PokemonSearchReducer;
