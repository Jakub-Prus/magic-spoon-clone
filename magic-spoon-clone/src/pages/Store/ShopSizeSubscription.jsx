import { useState } from "react";
import ShopBenefits from "./ShopBenefits";

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
      <h2 className="mb-4 text-center text-lg uppercase">
        2. CHOOSE YOUR PACK SIZE AND SUBSCRIPTION
      </h2>
      <div className="flex h-14 w-full rounded-full border-2 border-purple">
        <button
          key={4}
          className={`my-1 -mr-2 ml-2 flex w-1/2 items-center justify-center rounded-full px-12 py-4 text-center text-base font-medium text-purple transition-colors duration-200 ease-in-out ${
            chosenSize === 4 ? "bg-purple text-white" : ""
          }`}
          onClick={() => handleSizeButtonClick(4)}
        >
          4 PACK
        </button>
        <button
          key={6}
          className={`my-1 -ml-2 mr-2 flex w-1/2 items-center justify-center rounded-full px-12 py-4 text-center text-base font-medium text-purple transition-colors duration-200 ease-in-out ${
            chosenSize === 6 ? "bg-purple text-white" : ""
          }`}
          onClick={() => handleSizeButtonClick(6)}
        >
          6 PACK
        </button>
      </div>
      <div className="mt-4 flex h-8 w-full justify-center">
        <div
          className={`flex items-center justify-center rounded-full border-2 border-purple ${
            toggledSubscription ? "bg-purple" : ""
          }`}
        >
          <label
            htmlFor="toggle"
            className={`relative flex h-5 w-14 cursor-pointer items-center rounded-full`}
          >
            <input
              type="checkbox"
              id="toggle"
              className="sr-only "
              checked={toggledSubscription}
              onChange={handleToggleSubscription}
            />
            <span
              className={`absolute left-0 ml-2 h-5 w-5 rounded-full bg-purple transition-transform duration-300 ease-in-out ${
                toggledSubscription ? "translate-x-full transform bg-white" : ""
              }`}
            ></span>
          </label>
        </div>
        <h3
          className="ml-2 flex items-center justify-center text-center text-base font-normal uppercase underline"
          onClick={handleToggleSubscription}
        >
          SUBSCRIBE & SAVE(25%)
        </h3>
      </div>
      <button className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-purple text-lg uppercase text-white">
        ADD TO CART{" "}
        <span
          className={`${
            toggledSubscription || toggledDiscountedPrice
              ? "line-through opacity-30"
              : " "
          } mx-2`}
        >
          ${price}
        </span>
        <span
          className={`${
            toggledSubscription || toggledDiscountedPrice ? "block" : "hidden"
          }`}
        >
          ${discountedPrice}
        </span>
      </button>
      <div className="mb-24">
        <ShopBenefits toggledSubscription={toggledSubscription} />
        <p className="ml-8 mt-4 text-xs font-normal">*See terms of use</p>
      </div>
    </div>
  );
};

export default ShopSizeSubscription;
