import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    partOfCheckout: "information",
    showOrderSummary: false,
    checkoutInformation: {},
    shippingOption: "standard",
  },
  reducers: {
    updatePartOfCheckout: (state, action) => {
      state.partOfCheckout = action.payload;
    },
    updateShowOrderSummary: (state) => {
      state.showOrderSummary = !state.showOrderSummary;
    },
    updateCheckoutInformation: (state, action) => {
      state.checkoutInformation = action.payload;
    },
    updateShippingOption: (state, action) => {
      state.shippingOption = action.payload;
    },
  },
});

export const {
  updatePartOfCheckout,
  updateShowOrderSummary,
  updateCheckoutInformation,
  updateShippingOption,
} = checkoutSlice.actions;

export const selectPartOfCheckout = (state) => state.checkout.partOfCheckout;
export const selectShowOrderSummary = (state) => state.checkout.showOrderSummary;
export const selectCheckoutInformation = (state) => state.checkout.checkoutInformation;
export const selectShippingOption = (state) => state.checkout.shippingOption;

export default checkoutSlice.reducer;
