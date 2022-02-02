import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonSearchReducer from "./PokemonSearchReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducer";
import PokemonCardReducer from "./PokemonCardReducer";
import PageReducer from "./PageReducer";

const RootReducer = combineReducers({
  Page: PageReducer,
  PokemonList: PokemonListReducer,
  PokemonSearch: PokemonSearchReducer,
  PokemonCard: PokemonCardReducer,
  PokemonObject: PokemonMultipleReducer,
});

export default RootReducer;
//index.js
