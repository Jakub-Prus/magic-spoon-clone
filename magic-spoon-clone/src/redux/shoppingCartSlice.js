import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    shoppingCartOpen: false,
    itemsInShoppingCart: [],
    totalItemsInShoppingCart: 0,
    totalPriceInShoppingCart: 0,
    totalDiscountedPriceInShoppingCart: 0,
  },
  reducers: {
    updateShoppingCartOpen: (state) => {
      state.shoppingCartOpen = !state.shoppingCartOpen;
    },
    addItemToShoppingCart: (state, action) => {
      state.itemsInShoppingCart.push(action.payload);
    },
    deleteItemInShoppingCart: (state, action) => {
      const updatedItemsInShoppingCart = state.itemsInShoppingCart.filter(
        (element) => element.id !== action.payload
      );

      state.itemsInShoppingCart = updatedItemsInShoppingCart;
    },
    updatePriceOfItemInShoppingCart: (state, action) => {
      const { itemId, newPrice } = action.payload;
      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.id === itemId
      );
      if (itemToUpdate) itemToUpdate.price = newPrice;
    },
    incrementAmountOfItemInShoppingCart: (state, action) => {
      const itemId = action.payload;

      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.id === itemId
      );
      console.log("itemToUpdate: ", itemToUpdate);
      console.log("itemToUpdate.amount: ", itemToUpdate.amount);
      if (itemToUpdate) itemToUpdate.amount += 1;
    },
    decrementAmountOfItemInShoppingCart: (state, action) => {
      const itemId = action.payload;

      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.id === itemId
      );
      if (itemToUpdate && itemToUpdate.amount >= 1) itemToUpdate.amount -= 1;
    },
  },
});

export const {
  updateShoppingCartOpen,
  addItemToShoppingCart,
  deleteItemInShoppingCart,
  updatePriceOfItemInShoppingCart,
  incrementAmountOfItemInShoppingCart,
  decrementAmountOfItemInShoppingCart,
} = shoppingCartSlice.actions;

export const selectShoppingCartOpen = (state) => state.shoppingCart.shoppingCartOpen;
export const selectItemsInShoppingCart = (state) =>
  state.shoppingCart.itemsInShoppingCart;
export const selectTotalItemsInShoppingCart = (state) =>
  state.shoppingCart.totalItemsInShoppingCart;
export const selectTotalPriceInShoppingCart = (state) =>
  state.shoppingCart.totalPriceInShoppingCart;
export const selectTotalDiscountedPriceInShoppingCart = (state) =>
  state.shoppingCart.totalDiscountedPriceInShoppingCart;

export default shoppingCartSlice.reducer;
