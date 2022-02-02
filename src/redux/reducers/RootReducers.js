import {combineReducers} from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import CounterReducer from "./Counter.reducer";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer,
  counter: CounterReducer,
  Cart: CartReducer,
});

export default RootReducer;