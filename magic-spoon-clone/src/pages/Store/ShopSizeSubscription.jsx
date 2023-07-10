import { useState } from "react";
import ShopBenefits from "./ShopBenefits";
import ShopChooseSize from "./ShopChooseSize";
import ShopSubscription from "./ShopSubscription";
import ShopAddToCartButton from "./ShopAddToCartButton";
import ShopMobileStickyBuyMenu from "./ShopMobileStickyBuyMenu";

const ShopSizeSubscription = ({ chosenSize, setChosenSize }) => {
  const [toggledSubscription, setToggledSubscription] = useState(false);
  const [price, setPrice] = useState(39);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [toggledDiscountedPrice, setToggledDiscountedPrice] = useState(false);

  const handleSizeButtonClick = (size) => {
    switch (size) {
      case 4:
        setToggledDiscountedPrice(false);
        setPrice(39);
        setDiscountedPrice(39 * 0.75);
        break;
      case 6:
        setPrice(59);
        if (!toggledSubscription) {
          setDiscountedPrice(54);
          setToggledDiscountedPrice(true);
        } else {
          setPrice(54);
          setDiscountedPrice(59 * 0.75);
          setToggledDiscountedPrice(true);
        }
        break;
      default:
        break;
    }
    setChosenSize(size);
  };

  const handleToggleSubscription = () => {
    if (!toggledSubscription) setDiscountedPrice(price * 0.75);
    if (toggledDiscountedPrice && toggledSubscription) {
      setPrice(59);
      setDiscountedPrice(54);
    } else if (toggledDiscountedPrice) setPrice(discountedPrice);
    setToggledSubscription(!toggledSubscription);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center text-sm font-semibold text-purple">
      <ShopMobileStickyBuyMenu
        price={price}
        discountedPrice={discountedPrice}
        toggledDiscountedPrice={toggledDiscountedPrice}
        chosenSize={chosenSize}
        handleSizeButtonClick={handleSizeButtonClick}
        toggledSubscription={toggledSubscription}
        handleToggleSubscription={handleToggleSubscription}
      />
      <h2 className="mb-4 text-center text-lg uppercase">
        2. CHOOSE YOUR PACK SIZE AND SUBSCRIPTION
      </h2>
      <ShopChooseSize
        chosenSize={chosenSize}
        handleSizeButtonClick={handleSizeButtonClick}
        my={"0.5rem"}
        height={"3.5rem"}
        myButtons={"0.25rem"}
        mxButtons={"0.5rem"}
      />
      <ShopSubscription
        toggledSubscription={toggledSubscription}
        handleToggleSubscription={handleToggleSubscription}
      />
      <ShopAddToCartButton
        price={price}
        discountedPrice={discountedPrice}
        toggledSubscription={toggledSubscription}
        toggledDiscountedPrice={toggledDiscountedPrice}
        height={"3.5rem"}
        fontSize={"1.125rem"}
        my={"0.5rem"}
      />

      <div className="mb-24 lg:mb-4">
        <ShopBenefits toggledSubscription={toggledSubscription} />
        <p className="ml-8 mt-4 text-xs font-normal">*See terms of use</p>
      </div>
    </div>
  );
};

export default ShopSizeSubscription;
