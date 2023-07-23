import { useSelector } from "react-redux";
import { selectItemsInShoppingCart } from "../../redux/shoppingCartSlice";
import { selectShowOrderSummary } from "../../redux/checkoutSlice";

import { useState } from "react";

import CheckoutFormInformation from "./CheckoutFormInformation";
import CheckoutBanner from "./CheckoutBanner";
import CheckoutMobileSumPrice from "./CheckoutMobileSumPrice";

const Checkout = () => {
  const showOrderSummary = useSelector(selectShowOrderSummary);
  const totalItemsInShoppingCart = useSelector(selectItemsInShoppingCart).length;
  console.log(totalItemsInShoppingCart);
  const [partOfCheckout, setPartOfCheckout] = useState("checkout");

  return (
    <div className="flex w-full flex-col items-center">
      {partOfCheckout === "checkout" && (
        <div className="w-full">
          <CheckoutBanner />
          <CheckoutMobileSumPrice />

          <div
            style={{
              transform: showOrderSummary
                ? `translateY(${totalItemsInShoppingCart * 80 + 330}px)`
                : undefined,
            }}
            className={` flex w-full flex-col items-center transition-transform duration-300 ease-in-out`}
          >
            <div className="mt-6 w-[90%]">
              <div className="flex w-full flex-row items-center justify-between">
                <span className="text-lg font-normal">Contact</span>
                <span className="flex flex-row items-center justify-between text-sm font-light">
                  Already have an account?{" "}
                  <span className="ml-1 text-purple">Log in</span>
                </span>
              </div>
            </div>
            <CheckoutFormInformation />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
