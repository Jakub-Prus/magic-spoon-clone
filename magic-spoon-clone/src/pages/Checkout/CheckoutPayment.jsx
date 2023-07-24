import CheckoutShippingInfSummary from "./CheckoutShippingInfSummary";
import { TextField } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useSelector, useDispatch } from "react-redux";
import { updatePartOfCheckout, selectShippingPrice } from "../../redux/checkoutSlice";
import { selectTotalPriceInShoppingCart } from "../../redux/shoppingCartSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const CheckoutPayment = () => {
  const dispatch = useDispatch();
  const [afterPay, setAfterPay] = useState(false);
  const totalPrice =
    (useSelector(selectShippingPrice) + useSelector(selectTotalPriceInShoppingCart)) /
    100;
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-[90%]">
        <div className="mb-8 flex flex-col items-center">
          <CheckoutShippingInfSummary />
          <div className="mb-6 mt-6 flex w-full flex-row items-center">
            <TextField
              id="outlined-basic"
              label="Gift card or discount code"
              className="w-5/6"
            />
            <div className="ml-4 flex h-14 w-24 items-center justify-center rounded-lg bg-[#5b00ed] text-white">
              Apply
            </div>
          </div>
        </div>
        <div className="text-xl font-light text-[#333333]">Payment</div>
        <div className="mb-4 text-sm font-light text-gray-500">
          All transactions are secure and encrypted.
        </div>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AaDnejrRi_g7V2vDhRrfNPSCdq2pQHLvGo9DuXdNf-3M9KtED4V2Im1RpiEu_Po7yJ_GAhjqXw94iPdA",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice,
                    },
                  },
                ],
              });
            }}
            onApprove={async (actions) => {
              await actions.order.capture();
              setAfterPay(true);
            }}
          />
        </PayPalScriptProvider>
        {afterPay && (
          <div className="flex w-full justify-center text-center">
            Transaction completed
          </div>
        )}
        <div
          className="mt-4 flex cursor-pointer flex-row items-center justify-center text-purple"
          onClick={() => dispatch(updatePartOfCheckout("shipping"))}
        >
          <KeyboardArrowLeftIcon />
          Return to shipping
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
