import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import { pokeReducer, POKE_KEY } from './PokemonDetailsReducer';
import CounterReducer from "./Counter.reducer";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  [POKE_KEY]: pokeReducer,
  counter: CounterReducer,
  Cart: CartReducer,

});

export default RootReducer;