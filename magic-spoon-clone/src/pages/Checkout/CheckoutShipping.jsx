import CheckoutShippingInfSummary from "./CheckoutShippingInfSummary";
import CheckoutShippingOptions from "./CheckoutShippingOptions";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useDispatch } from "react-redux";
import { updatePartOfCheckout } from "../../redux/checkoutSlice";

const CheckoutShipping = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-[90%]">
        <div className="mb-8 flex flex-col items-center">
          <CheckoutShippingInfSummary />
        </div>
        <span className="color-[#333333] text-xl font-light">Shipping method</span>
        <div className="mb-4 mt-4 flex flex-col items-center">
          <CheckoutShippingOptions />
        </div>
        <div
          className="mt-4 flex cursor-pointer flex-row items-center justify-center text-purple"
          onClick={() => dispatch(updatePartOfCheckout("information"))}
        >
          <KeyboardArrowLeftIcon />
          Return to information
        </div>
      </div>
    </div>
  );
};

export default CheckoutShipping;
