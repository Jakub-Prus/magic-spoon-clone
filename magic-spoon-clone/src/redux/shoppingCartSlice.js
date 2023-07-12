import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    shoppingCartOpen: false,
    itemsInShoppingCart: [],
  },
  reducers: {
    updateShoppingCartOpen: (state) => {
      state.shoppingCartOpen = !state.shoppingCartOpen;
    },
  },
});

export const { updateShoppingCartOpen } = shoppingCartSlice.actions;

export const selectShoppingCartOpen = (state) => state.shoppingCart.shoppingCartOpen;

export default shoppingCartSlice.reducer;
