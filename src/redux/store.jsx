import rootReducer from "./root-reducer";
import { applyMiddleware, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

const initialState = {};
const middleware = [thunk]; //redux no permite hacer funciones asincronas.. por eso se usa el thunk

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
