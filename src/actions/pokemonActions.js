import axios from "axios";
import _ from "lodash";

export const GetPokemonAll = (page) => async (dispatch, getState) => {
  await dispatch(GetPokemonList(page));
  const pokemonNames = _.map(getState().PokemonList.results, "name");
  pokemonNames.forEach((el) => dispatch(GetPokemonCard(el)));
};

export const GetPokemonAllByType = (type) => async (dispatch, getState) => {
  await dispatch(GetPokemonListByType(type));
  const pokemons = _.map(getState().PokemonSearch.results, "pokemon");
  pokemons.forEach((el) => dispatch(GetPokemonCard(el.name)));
};



const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const perPage = 24;
    const offset = page * perPage - perPage;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: {
        count: response.data.count,
        results: response.data.results,
      },
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

export const ResetList = () => {
  return {
    type: "RESET_LIST",
  };
};

const GetPokemonListByType = (type) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_SEARCH_LOADING",
    });

    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    dispatch({
      type: "POKEMON_SEARCH_SUCCESS",
      payload: {
        count: response.data.pokemon.length,
        results: response.data.pokemon,
      },
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_SEARCH_FAIL",
    });
  }
};



const GetPokemonCard = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_CARD_LOADING",
    });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    dispatch({
      type: "POKEMON_CARD_SUCCESS",
      payload: {
        id: response.data.id,
        name: response.data.name,
        sprite: response.data.sprites.other.dream_world.front_default,
        types: response.data.types,
      },
      /* pokemonName: pokemon, */
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_CARD_FAIL",
    });
  }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING",
    });

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: response.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    });
  }
};
