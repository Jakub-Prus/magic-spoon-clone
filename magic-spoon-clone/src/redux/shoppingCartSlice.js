import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  shoppingCartOpen: false,
  itemsInShoppingCart: [],
  totalItemsInShoppingCart: 0,
  totalPriceInShoppingCart: 0,
  totalDiscountedPriceInShoppingCart: 0,
};

// Retrieve state from local storage if available
const savedState = localStorage.getItem("shoppingCartState");
const parsedState = savedState ? JSON.parse(savedState) : {};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { ...initialState, ...parsedState },
  reducers: {
    updateShoppingCartOpen: (state) => {
      state.shoppingCartOpen = !state.shoppingCartOpen;
    },
    addItemToShoppingCart: (state, action) => {
      if (state.itemsInShoppingCart.length === 0) {
        state.itemsInShoppingCart.push(action.payload);
      } else {
        const isProductInShoppingCart = state.itemsInShoppingCart.find(
          (element) => element.shoppingCartItemId === action.payload.shoppingCartItemId
        );
        if (!isProductInShoppingCart) state.itemsInShoppingCart.push(action.payload);
      }
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
    updatePriceOfItemInShoppingCartByChangingAmount: (state, action) => {
      const { shoppingCartItemId, amount } = action.payload;
      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.shoppingCartItemId === shoppingCartItemId
      );
      if (itemToUpdate && itemToUpdate.amount >= 1)
        itemToUpdate.price = itemToUpdate.originalPrice * amount;
    },
    incrementAmountOfItemInShoppingCart: (state, action) => {
      const shoppingCartItemId = action.payload;

      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.shoppingCartItemId === shoppingCartItemId
      );
      if (itemToUpdate) itemToUpdate.amount += 1;
    },
    decrementAmountOfItemInShoppingCart: (state, action) => {
      const shoppingCartItemId = action.payload;

      const itemToUpdate = state.itemsInShoppingCart.find(
        (cartItem) => cartItem.shoppingCartItemId === shoppingCartItemId
      );
      if (itemToUpdate && itemToUpdate.amount > 1) {
        itemToUpdate.amount -= 1;
      } else if (itemToUpdate && itemToUpdate.amount === 1) {
        const updatedItemsInShoppingCart = state.itemsInShoppingCart.filter(
          (element) => element.shoppingCartItemId !== shoppingCartItemId
        );
        state.itemsInShoppingCart = updatedItemsInShoppingCart;
      }
    },
    updateShoppingCartTotalPrice: (state) => {
      let totalPrice = 0;
      state.itemsInShoppingCart.forEach((item) => {
        totalPrice += item.price;
      });
      state.totalPriceInShoppingCart = totalPrice;
    },
    updateShoppingCartDiscountedPrice: (state) => {
      let discountedPrice = 0;
      state.itemsInShoppingCart.forEach((item) => {
        discountedPrice += item.discountedPrice;
      });
      state.totalDiscountedPriceInShoppingCart = discountedPrice;
    },
  },
});

export const {
  updateShoppingCartOpen,
  addItemToShoppingCart,
  deleteItemInShoppingCart,
  updatePriceOfItemInShoppingCart,
  updatePriceOfItemInShoppingCartByChangingAmount,
  incrementAmountOfItemInShoppingCart,
  decrementAmountOfItemInShoppingCart,
  updateShoppingCartTotalPrice,
} = shoppingCartSlice.actions;

export const updateAmountOfItemInShoppingCart =
  (shoppingCartItemId, amount, action) => (dispatch) => {
    switch (action) {
      case "increment":
        dispatch(incrementAmountOfItemInShoppingCart(shoppingCartItemId));
        dispatch(
          updatePriceOfItemInShoppingCartByChangingAmount({ shoppingCartItemId, amount })
        );
        dispatch(updateShoppingCartTotalPrice());
        break;
      case "decrement":
        dispatch(decrementAmountOfItemInShoppingCart(shoppingCartItemId));
        dispatch(
          updatePriceOfItemInShoppingCartByChangingAmount({ shoppingCartItemId, amount })
        );

        break;
      default:
        break;
    }
  };

export const saveShopState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("shoppingCartState", serializedState);
  } catch (error) {
    console.error("Error saving shop state to local storage:", error);
  }
};

export const shopMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState().shoppingCart;
  saveShopState(state);
  return result;
};

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
