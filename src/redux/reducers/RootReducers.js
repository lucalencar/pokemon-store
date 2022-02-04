import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
<<<<<<< HEAD
import { pokeReducer, POKE_KEY } from './PokemonDetailsReducer';
=======
import CartReducer from "./CartReducer";
>>>>>>> staging

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
<<<<<<< HEAD
  [POKE_KEY]: pokeReducer

=======
  Cart: CartReducer,
>>>>>>> staging
});

export default RootReducer;