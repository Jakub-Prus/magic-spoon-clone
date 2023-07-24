import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShippingOption,
  updateShippingOption,
  updatePartOfCheckout,
} from "../../redux/checkoutSlice";

const CheckoutShippingOptions = () => {
  const dispatch = useDispatch();
  const shippingMethod = useSelector(selectShippingOption);
  const [selectedOption, setSelectedOption] = useState(shippingMethod);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateShippingOption(selectedOption));
    dispatch(updatePartOfCheckout("payment"));
  };

  return (
    <div className="flex w-full flex-col items-center ">
      <div className="flex w-full flex-col items-center rounded-lg border border-gray-300">
        <div className="my-2 w-[90%] font-light">
          <form className="w-full">
            <div className="my-1 flex w-full flex-col">
              <div className="mb-4 mt-2 flex flex-row items-center justify-between">
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    value="standard"
                    name="shipping"
                    checked={selectedOption === "standard"}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <label htmlFor="standard" className="ml-4">
                    Standard Shipping
                  </label>
                </div>
                <span className="ml-2 font-semibold text-black">$4.99</span>
              </div>
              <div className="mb-4 flex flex-row items-center justify-between">
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    value="express"
                    name="shipping"
                    checked={selectedOption === "express"}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <label htmlFor="express" className="ml-4">
                    Express Shipping
                  </label>
                </div>
                <span className="ml-2 font-semibold text-black">$8.99</span>
              </div>
              <div className="mb-2 flex flex-row items-center justify-between">
                <div className="flex flex-row justify-center">
                  <input
                    type="radio"
                    value="premium"
                    name="shipping"
                    checked={selectedOption === "premium"}
                    onChange={handleChange}
                    className="h-5 w-5"
                  />
                  <label htmlFor="premium" className="ml-4">
                    Premium Shipping
                  </label>
                </div>
                <span className="ml-2 font-semibold text-black">$12.99</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="mt-8 w-full rounded-lg bg-[#5b00ed] py-5 text-white"
        onClick={handleSubmit}
      >
        {" "}
        Continue to payment
      </button>
    </div>
  );
};

export default CheckoutShippingOptions;
