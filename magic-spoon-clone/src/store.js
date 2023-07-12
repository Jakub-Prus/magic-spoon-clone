import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./redux/shopSlice";
import shoppingCartReducer from "./redux/shoppingCartSlice";

export default configureStore({
  reducer: { shop: shopReducer, shoppingCart: shoppingCartReducer },
});
