import { combineReducers } from "redux";
import { storeReducer, StoreReducer } from "./store";
import { cartReducer, CartReducer } from "./cart";

export interface StateStore {
  store: StoreReducer;
  cart: CartReducer;
}

export const rootReducer = combineReducers<StateStore>({
  store: storeReducer,
  cart: cartReducer,
});
