import { useDispatch, useSelector } from "react-redux";
import {
  addItemToShoppingCart,
  updateShoppingCartOpen,
} from "../../redux/shoppingCartSlice";
import {
  selectChosenItem,
  selectChosenSize,
  selectPrice,
  selectDiscountedPrice,
  selectSubscription,
  calculateActualShopPrice,
} from "../../redux/shopSlice";
import { useEffect } from "react";

const ShopAddToCartButton = ({ height, fontSize, my }) => {
  const dispatch = useDispatch();
  const shopItemPrice = useSelector(selectPrice);
  const shopItemDiscountedPrice = useSelector(selectDiscountedPrice);
  const toggledSubscription = useSelector(selectSubscription);
  const selectedShopItem = useSelector(selectChosenItem);
  const size = useSelector(selectChosenSize);
  const amount = 1;
  const shoppingCartItemId = selectedShopItem.id + size;
  const itemShopName = selectedShopItem.title + " - 1 case (" + size + " boxes)";
  let price;
  if (shopItemDiscountedPrice === 0) price = shopItemPrice;
  else price = Math.min(shopItemPrice, shopItemDiscountedPrice);
  const newShoppingCartItem = {
    ...selectedShopItem,
    shoppingCartItemId: shoppingCartItemId,
    itemShopName: itemShopName,
    originalPrice: price,
    price: price,
    size: size,
    amount: amount,
  };
  // console.log("newShoppingCartItem: ", newShoppingCartItem);

  useEffect(() => {
    dispatch(calculateActualShopPrice(toggledSubscription, size));
  });

  // console.log(
  //   "AddtoCartButton-",
  //   "shopItemPrice:",
  //   shopItemPrice,
  //   "shopItemDiscountedPrice: ",
  //   shopItemDiscountedPrice
  // ); // For Debug

  return (
    <button
      className="flex w-full items-center justify-center rounded-full bg-purple uppercase text-white lg:w-4/5"
      style={{ height: height, fontSize: fontSize, marginTop: my, marginBottom: my }}
      onClick={() => {
        dispatch(addItemToShoppingCart(newShoppingCartItem));
        dispatch(updateShoppingCartOpen());
      }}
    >
      ADD TO CART{" "}
      <span
        className={`${
          toggledSubscription || shopItemDiscountedPrice !== 0
            ? "line-through opacity-30"
            : ""
        } mx-2`}
      >
        ${shopItemPrice / 100}
      </span>
      <span
        className={`${
          toggledSubscription || shopItemDiscountedPrice !== 0 ? "block" : "hidden"
        }`}
      >
        ${shopItemDiscountedPrice / 100}
      </span>
    </button>
  );
};

export default ShopAddToCartButton;
