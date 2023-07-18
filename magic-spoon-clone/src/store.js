import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./redux/shopSlice";
import checkoutReducer from "./redux/checkoutSlice";
import shoppingCartReducer, {
  saveShopState,
  shopMiddleware,
} from "./redux/shoppingCartSlice";

const store = configureStore({
  reducer: {
    shop: shopReducer,
    shoppingCart: shoppingCartReducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopMiddleware),
});

store.subscribe(() => {
  const state = store.getState().shop;
  saveShopState(state);
});

export default store;
