import axios from "axios";

export const POKE_KEY = 'pokeStore'


export const GetPokemon = (pokemon) => async dispatch => {

  
  try {
    dispatch({
      type: "POKEMON_MULTIPLE_LOADING"
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    })
  }
};

export function searchPokemon(pokemon) {
  return {
      type: 'SEARCHED_POKEMON',
      payload: pokemon
  }
}