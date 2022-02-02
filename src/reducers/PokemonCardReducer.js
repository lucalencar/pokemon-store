const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonCardReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_CARD_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "POKEMON_CARD_FAIL":
      return {
        ...state,
        errorMsg: "unable to get pokemon",
      };

    case "POKEMON_CARD_SUCCESS":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: {
            id: action.payload.id,
            sprite: action.payload.sprite,
            types: action.payload.types,
          },
        },
      };

    default:
      return state;
  }
};

export default PokemonCardReducer;
