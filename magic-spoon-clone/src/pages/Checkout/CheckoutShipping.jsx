import CheckoutShippingInfSummary from "./CheckoutShippingInfSummary";
import CheckoutShippingOptions from "./CheckoutShippingOptions";

const CheckoutShipping = () => {
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
      </div>
    </div>
  );
};

export default CheckoutShipping;
