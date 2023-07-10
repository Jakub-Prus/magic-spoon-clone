import ShopItemHeading from "./ShopItemHeading";
import ShopDetailedImages from "./ShopDetailedImages";

const ShopItemDetails = ({ title, description, reviews }) => {
  const absoluteMainImgPath = "src/assets/img/store/main-img/";
  return (
    <div className="mb-2 flex w-full flex-col items-center justify-center text-purple">
      <ShopItemHeading title={title} reviews={reviews} />
      <img
        src={absoluteMainImgPath + title + ".webp"}
        alt=""
        className="mt-6 min-h-[270px] w-4/5 self-start"
      />
      <ShopDetailedImages product={title} />
      <p className="mt-5 min-h-[130px] text-center text-sm font-medium lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default ShopItemDetails;
