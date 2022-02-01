import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import { pokeReducer, POKE_KEY } from './PokemonDetailsReducer';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  [POKE_KEY]: pokeReducer

});

export default RootReducer;