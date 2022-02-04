import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

const persistedReducer = persistReducer(persistConfig, RootReducer);

const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(Store);

export { Store, persistor };