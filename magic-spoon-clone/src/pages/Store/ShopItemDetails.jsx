import ShopItemHeading from "./ShopItemHeading";
import ShopDetailedImages from "./ShopDetailedImages";

const ShopItemDetails = ({ title, description, reviews }) => {
  const absoluteMainImgPath = "src/assets/img/store/main-img/";
  return (
    <div className="flex w-full flex-col items-center justify-center text-purple">
      <ShopItemHeading title={title} reviews={reviews} />
      <img
        src={absoluteMainImgPath + title + ".webp"}
        alt=""
        className="mt-6 w-4/5 self-start"
      />
      <ShopDetailedImages product={title} />
      <p className="mt-5 text-center font-medium">{description}</p>
    </div>
  );
};

export default ShopItemDetails;
