import { createSlice } from "@reduxjs/toolkit";
import {
  usa_states,
  australia_states,
  canada_provinces,
  country_region,
} from "../data/orderSummaryStates";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    showOrderSummary: false,
    countryValue: "United States",
  },
  reducers: {
    updateShowOrderSummary: (state) => {
      state.showOrderSummary = !state.showOrderSummary;
    },
    updateCountryValue: (state, action) => {
      state.showOrderSummary = action.payload;
    },
  },
});

export const { updateShowOrderSummary } = checkoutSlice.actions;

export const selectShowOrderSummary = (state) => state.checkout.showOrderSummary;
export const selectCountryValue = (state) => state.checkout.countryValue;

export default checkoutSlice.reducer;
