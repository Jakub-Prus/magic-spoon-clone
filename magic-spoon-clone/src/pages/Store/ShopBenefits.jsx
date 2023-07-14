import { useSelector } from "react-redux";
import { selectSubscription } from "../../redux/shopSlice";
import ShopBenefit from "./ShopBenefit";

const ShopBenefits = () => {
  const subscription = useSelector(selectSubscription);
  return (
    <div className="mt-4 grid w-full grid-cols-2 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
      <ShopBenefit text={"Try risk-free, 100% happiness guaranteed*"} />
      <ShopBenefit text={"60,000+ 5-star reviews"} />
      <ShopBenefit
        text={"25% savings on every order, always."}
        isVisible={subscription}
      />
      <ShopBenefit
        text={"Exclusive early access and discounts"}
        isVisible={subscription}
      />
      <ShopBenefit
        text={"Easily swap flavors or shipments anytime"}
        isVisible={subscription}
      />
      <ShopBenefit text={"Cancel anytime"} isVisible={subscription} />
    </div>
  );
};

export default ShopBenefits;
