import { combineReducers } from "redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CounterReducer from "./reducers/Counter.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const Reducers = combineReducers({
  counter: CounterReducer,
});

const persistedReducer = persistReducer(persistConfig, Reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };