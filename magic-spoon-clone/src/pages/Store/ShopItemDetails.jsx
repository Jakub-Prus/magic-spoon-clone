import ShopItemHeading from "./ShopItemHeading";
import ShopDetailedImages from "./ShopDetailedImages";
import { useSelector } from "react-redux";
import { selectChosenItem } from "../../redux/shopSlice";

const ShopItemDetails = () => {
  const absoluteMainImgPath = "src/assets/img/store/main-img/";
  const selectedItem = useSelector(selectChosenItem);
  return (
    <div className="mb-2 flex w-full flex-col items-center justify-center text-purple">
      <ShopItemHeading title={selectedItem.title} reviews={selectedItem.reviews} />
      <img
        src={absoluteMainImgPath + selectedItem.title + ".webp"}
        alt=""
        className="mt-6 min-h-[270px] w-4/5 self-start"
      />
      <ShopDetailedImages product={selectedItem.title} />
      <p className="mt-5 min-h-[130px] text-center text-sm font-medium lg:text-base">
        {selectedItem.description}
      </p>
    </div>
  );
};

export default ShopItemDetails;
