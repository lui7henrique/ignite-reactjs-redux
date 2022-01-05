import { combineReducers } from "redux";
import { cart } from "../modules/cart/reducer";

export const rootReducer = combineReducers({
  cart,
});
