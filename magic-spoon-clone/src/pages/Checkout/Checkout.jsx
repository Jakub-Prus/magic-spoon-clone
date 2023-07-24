import { useSelector } from "react-redux";
import { selectItemsInShoppingCart } from "../../redux/shoppingCartSlice";
import { selectShowOrderSummary, selectPartOfCheckout } from "../../redux/checkoutSlice";
import CheckoutFormInformation from "./CheckoutFormInformation";
import CheckoutBanner from "./CheckoutBanner";
import CheckoutMobileSumPrice from "./CheckoutMobileSumPrice";
import CheckoutSecondBanner from "./CheckoutSecondBanner";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutPayment from "./CheckoutPayment";

const Checkout = () => {
  const showOrderSummary = useSelector(selectShowOrderSummary);
  const totalItemsInShoppingCart = useSelector(selectItemsInShoppingCart).length;
  console.log(totalItemsInShoppingCart);
  const partOfCheckout = useSelector(selectPartOfCheckout);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full">
        <CheckoutBanner />
        <CheckoutMobileSumPrice />

        <div
          style={{
            transform: showOrderSummary
              ? `translateY(${totalItemsInShoppingCart * 80 + 330}px)`
              : undefined,
          }}
          className={`flex w-full flex-col items-center transition-transform duration-300 ease-in-out`}
        >
          {partOfCheckout === "information" && <CheckoutSecondBanner />}
          {partOfCheckout === "information" && <CheckoutFormInformation />}
          {partOfCheckout === "shipping" && <CheckoutShipping />}
          {partOfCheckout === "payment" && <CheckoutPayment />}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
