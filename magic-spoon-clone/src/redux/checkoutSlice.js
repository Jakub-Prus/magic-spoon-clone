import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    partOfCheckout: "information",
    showOrderSummary: false,
    checkoutInformation: {},
    shippingOption: "standard",
    shippingPrice: 499,
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
      switch (action.payload) {
        case "standard":
          state.shippingPrice = 499;
          break;
        case "express":
          state.shippingPrice = 899;
          break;
        case "premium":
          state.shippingPrice = 1299;
          break;

        default:
          break;
      }
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
export const selectShippingPrice = (state) => state.checkout.shippingPrice;

export default checkoutSlice.reducer;
