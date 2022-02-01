import {createStore} from "redux";
import {composeWithDevTools, composiWithDevTools} from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducers";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store