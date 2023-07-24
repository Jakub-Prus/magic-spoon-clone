import { useSelector, useDispatch } from "react-redux";
import {
  selectCheckoutInformation,
  updatePartOfCheckout,
} from "../../redux/checkoutSlice";

const CheckoutShippingInfSummary = () => {
  const dispatch = useDispatch();
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
      </div>
    </div>
  );
};

export default CheckoutShippingInfSummary;
