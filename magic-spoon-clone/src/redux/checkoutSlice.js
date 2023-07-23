import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    showOrderSummary: false,
    checkoutInformation: {},
  },
  reducers: {
    updateShowOrderSummary: (state) => {
      state.showOrderSummary = !state.showOrderSummary;
    },
    updateCheckoutInformation: (state, action) => {
      state.checkoutInformation = action.payload;
    },
  },
});

export const { updateShowOrderSummary, updateCheckoutInformation } =
  checkoutSlice.actions;

export const selectShowOrderSummary = (state) => state.checkout.showOrderSummary;
export const selectCheckoutInformation = (state) => state.checkout.checkoutInformation;

export default checkoutSlice.reducer;
