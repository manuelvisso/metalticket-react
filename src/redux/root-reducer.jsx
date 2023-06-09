import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import concertsReducer from "./concerts/concerts-reducer";
import cartReducer from "./cart/cart-reducer";
import filterReducer from "./filterSelect/filterSelect-reducer.";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  concerts: concertsReducer,
  filter: filterReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
