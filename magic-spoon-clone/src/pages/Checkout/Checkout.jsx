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
  const partOfCheckout = useSelector(selectPartOfCheckout);

  return (
    <div className="flex w-full flex-col items-center">
      <CheckoutBanner />
      <CheckoutMobileSumPrice />

      <div
        style={{
          transform: showOrderSummary
            ? `translateY(${totalItemsInShoppingCart * 90 + 330}px)`
            : undefined,
        }}
        className={`mb-8 flex w-full flex-col items-center justify-center transition-transform duration-300 ease-in-out lg:w-3/5 `}
      >
        {/* {partOfCheckout === "information" && <CheckoutSecondBanner />} */}
        {partOfCheckout === "information" && <CheckoutFormInformation />}
        {partOfCheckout === "shipping" && <CheckoutShipping />}
        {partOfCheckout === "payment" && <CheckoutPayment />}
      </div>
    </div>
  );
};

export default Checkout;
