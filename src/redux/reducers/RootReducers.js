import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import { pokeReducer, POKE_KEY } from './PokemonDetailsReducer';
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  [POKE_KEY]: pokeReducer,
  Cart: CartReducer,

});

export default RootReducer;