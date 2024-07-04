import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/cart.reducer";

const RootReducer = combineReducers({
  cart: CartReducer,
});

const store = configureStore({
  reducer: RootReducer,
});

export default store;
