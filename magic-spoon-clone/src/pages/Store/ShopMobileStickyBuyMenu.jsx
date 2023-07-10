import ShopChooseSize from "./ShopChooseSize";
import ShopSubscription from "./ShopSubscription";
import ShopAddToCartButton from "./ShopAddToCartButton";

const ShopMobileStickyBuyMenu = ({
  price,
  discountedPrice,
  toggledDiscountedPrice,
  chosenSize,
  handleSizeButtonClick,
  toggledSubscription,
  handleToggleSubscription,
}) => {
  return (
    <div className="absolute bottom-0 z-40 flex w-full items-center justify-center bg-white pt-1 lg:hidden">
      <div className="flex w-[90%] flex-col items-center justify-center">
        <ShopSubscription
          toggledSubscription={toggledSubscription}
          handleToggleSubscription={handleToggleSubscription}
        />
        <ShopChooseSize
          chosenSize={chosenSize}
          handleSizeButtonClick={handleSizeButtonClick}
          height={"2.5rem"}
          myButtons={"0rem"}
          mxButtons={"0rem"}
        />
        <ShopAddToCartButton
          price={price}
          discountedPrice={discountedPrice}
          toggledSubscription={toggledSubscription}
          toggledDiscountedPrice={toggledDiscountedPrice}
          height={"3rem"}
          fontSize={"1rem"}
          my={"0.75rem"}
        />
      </div>
    </div>
  );
};

export default ShopMobileStickyBuyMenu;
