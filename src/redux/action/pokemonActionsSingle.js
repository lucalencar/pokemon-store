import Axios from 'axios'
import { LOAD_POKE_REQUEST,
    LOAD_POKE_SUCCESS,
    LOAD_POKE_FAILURE
} from "./action";

export const loadPokeName = (pokemonName) =>{
    return async (dispatch) =>{
       try{
           console.log('Olá, eu sou: '+ pokemonName)
           dispatch({type: LOAD_POKE_REQUEST})
           console.log('Hello, i am: '+ pokemonName)
           let dataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
           let response = await Axios.get(dataURL)
           dispatch({type: LOAD_POKE_SUCCESS, payload: response.data})
       }
       catch(error){
           dispatch({type: LOAD_POKE_FAILURE, payload:error})
       }
    }
    }
    

