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
      shoppingCartItemId: "",
      originalPrice: 3900,
      price: 3900,
      discountedPrice: 0,
      size: 4,
      amount: 1,
    },
    chosenItemName: "VARIETY",
    chosenSize: 4,
    subscription: false,
    price: 3900,
    discountedPrice: 0,
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
    toggleSubscription: (state) => {
      state.subscription = !state.subscription;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updateDiscountedPrice: (state, action) => {
      state.discountedPrice = action.payload;
    },
  },
});

export const {
  updateChosenItem,
  updateChosenItemName,
  updateChosenSize,
  toggleSubscription,
  updatePrice,
  updateDiscountedPrice,
} = shopSlice.actions;

export const updateShopSelectedItem = (itemName) => (dispatch) => {
  dispatch(updateChosenItemName(itemName));
  const selectedItem = shopData.find((item) => item.id === itemName);
  if (selectedItem) {
    dispatch(updateChosenItem(selectedItem));
  }
};

export const calculateActualShopPrice = (subscription, packageSize) => (dispatch) => {
  const price = packageSize === 4 ? 3900 : 5900;
  const discountedPrice =
    subscription === true ? price * 0.75 : packageSize === 6 ? price - 500 : 0;
  // console.log("subscription: ", subscription, "packageSize: ", packageSize); // For debug
  // console.log("price: ", price, "discountedPrice: ", discountedPrice); // For debug
  dispatch(updatePrice(price));
  dispatch(updateDiscountedPrice(discountedPrice));
};

export const selectChosenItem = (state) => state.shop.chosenItem;
export const selectChosenItemName = (state) => state.shop.chosenItemName;
export const selectChosenSize = (state) => state.shop.chosenSize;
export const selectSubscription = (state) => state.shop.subscription;
export const selectPrice = (state) => state.shop.price;
export const selectDiscountedPrice = (state) => state.shop.discountedPrice;

export default shopSlice.reducer;
