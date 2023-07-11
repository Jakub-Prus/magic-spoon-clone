import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    chosenItem: "VARIETY",
    chosenSize: 4,
    subscription: false,
  },
  reducers: {
    updateChosenItem: (state, action) => {
      state.chosenItem = action.payload;
    },
    updateChosenSize: (state, action) => {
      state.chosenSize = action.payload;
    },
    updateSubscription: (state) => {
      state.subscription = !state.subscription;
    },
  },
});

export const { updateChosenItem, updateChosenSize, updateSubscription } =
  shopSlice.actions;

export const selectChosenItem = (state) => state.shop.chosenItem;
export const selectChosenSize = (state) => state.shop.chosenSize;
export const selectSubscription = (state) => state.shop.subscription;

export default shopSlice.reducer;
