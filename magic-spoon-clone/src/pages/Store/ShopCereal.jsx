import ShopItemDetails from "./ShopItemDetails";
import ShopProductOptions from "./ShopProductOptions";
import ShopSizeSubscription from "./ShopSizeSubscription";
import ShopFeatures from "./ShopFeatures";
import ShopIngredients from "./ShopIngredients";
import ShopUsVsThem from "./ShopUsVsThem";
import ShopProductReview from "./ShopProductReview";

const ShopCereal = () => {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center justify-center bg-[#dad9ff] pt-36">
        <div className="flex w-[90%] flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-x-4">
          <ShopItemDetails />
          <div
            className="w-full lg:bg-[#e5e4ff] lg:p-8"
            style={{ borderRadius: "2.5rem" }}
          >
            <ShopProductOptions />
            <ShopSizeSubscription />
          </div>
        </div>
        <ShopFeatures />
        <ShopIngredients />
        <ShopUsVsThem />
        <ShopProductReview />
      </div>
    </section>
  );
};

export default ShopCereal;
