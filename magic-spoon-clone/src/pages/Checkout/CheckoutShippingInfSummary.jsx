import { useSelector, useDispatch } from "react-redux";
import {
  selectCheckoutInformation,
  updatePartOfCheckout,
  selectPartOfCheckout,
  selectShippingPrice,
  selectShippingOption,
} from "../../redux/checkoutSlice";

const CheckoutShippingInfSummary = () => {
  const dispatch = useDispatch();
  const partOfCheckout = useSelector(selectPartOfCheckout);
  const shippingPrice = useSelector(selectShippingPrice) / 100;
  const shippingOption = useSelector(selectShippingOption);
  const {
    email,
    firstName,
    lastName,
    company,
    address,
    suburb,
    zipcode,
    state,
    country,
  } = useSelector(selectCheckoutInformation);
  const shipTo = company
    ? `${company}, ${address}, ${suburb}, ${state}, ${zipcode}, ${country}`
    : `${firstName} ${lastName}, ${address}, ${suburb}, ${state}, ${zipcode}, ${country}`;

  return (
    <div className="flex w-full flex-col items-center rounded-lg border-[1px] border-gray-300">
      <div className="my-2 w-[90%] font-light">
        <div className="flex flex-row justify-between">
          <span className="text-sm text-gray-500">Contact</span>
          <span
            className="text-xs  text-purple"
            onClick={() => dispatch(updatePartOfCheckout("information"))}
          >
            Change
          </span>
        </div>
        <span className="text-base">{email}</span>
        <div className="my-2 h-2 w-full border-b-[1px] border-gray-300"></div>

        <div className="flex flex-row justify-between">
          <span className="text-sm text-gray-500">Ship to</span>
          <span
            className="text-xs  text-purple"
            onClick={() => dispatch(updatePartOfCheckout("information"))}
          >
            Change
          </span>
        </div>
        <span className="text-base">{shipTo}</span>

        {partOfCheckout === "payment" && (
          <div className="w-full">
            <div className="my-2 h-2 w-full border-b-[1px] border-gray-300"></div>
            <div className="flex flex-row justify-between">
              <span className="text-sm text-gray-500">Method</span>
              <span
                className="text-xs  text-purple"
                onClick={() => dispatch(updatePartOfCheckout("shipping"))}
              >
                Change
              </span>
            </div>
            <span className="text-base capitalize">
              {shippingOption} Shipping · ${shippingPrice}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutShippingInfSummary;
