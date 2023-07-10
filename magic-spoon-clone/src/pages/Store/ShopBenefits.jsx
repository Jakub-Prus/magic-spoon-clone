import ShopBenefit from "./ShopBenefit";

const ShopBenefits = ({ toggledSubscription }) => {
  console.log(toggledSubscription);
  return (
    <div className="mt-4 grid w-full grid-cols-2 grid-rows-3 gap-2">
      <ShopBenefit text={"Try risk-free, 100% happiness guaranteed*"} />
      <ShopBenefit text={"60,000+ 5-star reviews"} />
      <ShopBenefit
        text={"25% savings on every order, always."}
        isVisible={toggledSubscription}
      />
      <ShopBenefit
        text={"Exclusive early access and discounts"}
        isVisible={toggledSubscription}
      />
      <ShopBenefit
        text={"Easily swap flavors or shipments anytime"}
        isVisible={toggledSubscription}
      />
      <ShopBenefit text={"Cancel anytime"} isVisible={toggledSubscription} />
    </div>
  );
};

export default ShopBenefits;
