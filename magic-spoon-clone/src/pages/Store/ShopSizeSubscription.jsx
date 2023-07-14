import ShopBenefits from "./ShopBenefits";
import ShopChooseSize from "./ShopChooseSize";
import ShopSubscription from "./ShopSubscription";
import ShopAddToCartButton from "./ShopAddToCartButton";
import ShopMobileStickyBuyMenu from "./ShopMobileStickyBuyMenu";

const ShopSizeSubscription = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-sm font-semibold text-purple">
      <ShopMobileStickyBuyMenu />
      <h2 className="mb-4 text-center text-lg uppercase">
        2. CHOOSE YOUR PACK SIZE AND SUBSCRIPTION
      </h2>
      <ShopChooseSize
        my={"0.5rem"}
        height={"3.5rem"}
        myButtons={"0.25rem"}
        mxButtons={"0.5rem"}
      />
      <ShopSubscription />
      <ShopAddToCartButton height={"3.5rem"} fontSize={"1.125rem"} my={"0.5rem"} />

      <div className="mb-24 lg:mb-4">
        <ShopBenefits />
        <p className="ml-8 mt-4 text-xs font-normal">*See terms of use</p>
      </div>
    </div>
  );
};

export default ShopSizeSubscription;
