import { createSlice } from "@reduxjs/toolkit";
import { shopData } from "../data/shopData";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    chosenItem: {
      id: "VARIETY",
      title: "VARIETY",
      description:
        "Try our most popular flavors—Fruity, Frosted, Cocoa, and Peanut Butter. We`ve reimagined all your favorite childhood cereals with only 4-5g net carbs, 13-14g complete protein, 140-170 calories, and nothing artificial.",
      reviews: "22688",
      color: "#3f0791",
    },
    chosenItemName: "VARIETY",
    chosenSize: 4,
    subscription: false,
  },
  reducers: {
    updateChosenItem: (state, action) => {
      state.chosenItem = action.payload;
    },
    updateChosenItemName: (state, action) => {
      state.chosenItemName = action.payload;
    },
    updateChosenSize: (state, action) => {
      state.chosenSize = action.payload;
    },
    updateSubscription: (state) => {
      state.subscription = !state.subscription;
    },
  },
});

export const {
  updateChosenItem,
  updateChosenItemName,
  updateChosenSize,
  updateSubscription,
} = shopSlice.actions;

export const updateShopSelectedItem = (itemName) => (dispatch) => {
  dispatch(updateChosenItemName(itemName));
  const selectedItem = shopData.find((item) => item.id === itemName);
  if (selectedItem) {
    dispatch(updateChosenItem(selectedItem));
  }
};

export const selectChosenItem = (state) => state.shop.chosenItem;
export const selectChosenItemName = (state) => state.shop.chosenItemName;
export const selectChosenSize = (state) => state.shop.chosenSize;
export const selectSubscription = (state) => state.shop.subscription;

export default shopSlice.reducer;
