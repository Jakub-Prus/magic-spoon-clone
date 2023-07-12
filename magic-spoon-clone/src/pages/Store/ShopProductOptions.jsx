import { useState } from "react";
import { shopData } from "../../data/shopData";
import { useSelector, useDispatch } from "react-redux";
import { selectChosenItemName, updateShopSelectedItem } from "../../redux/shopSlice";

const ShopProductOptions = () => {
  const dispatch = useDispatch();
  const chosenProductName = useSelector(selectChosenItemName);

  const [isHovering, setIsHovering] = useState(false);
  const [currentHoverElementText, setCurrentHoverElementText] = useState("");

  const handleButtonClick = (id) => {
    dispatch(updateShopSelectedItem(id));
  };
  const handleMouseOver = (event) => {
    setCurrentHoverElementText(event.target.innerText);
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center text-sm font-semibold text-purple">
      <h2 className="mb-4 text-lg uppercase">1. Choose your flavor</h2>
      <div className="block w-full lg:hidden">
        <button
          key={shopData[0].id}
          className="flex h-10 w-full items-center justify-center rounded-full bg-white"
          onClick={() => handleButtonClick(shopData[0].id)}
          style={
            shopData[0].id === chosenProductName
              ? { backgroundColor: shopData[0].color, color: "#ffffff" }
              : null
          }
        >
          {shopData[0].title}
        </button>
        <div className="mt-2 grid w-full grid-cols-2 grid-rows-6 gap-2">
          {shopData.slice(1).map((item) => {
            return (
              <button
                key={item.id}
                className={`flex h-10 w-full items-center justify-center rounded-full bg-white hover:bg-[${item.color}]`}
                onClick={() => handleButtonClick(item.id)}
                style={
                  item.id === chosenProductName ? { backgroundColor: item.color } : null
                }
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-8 hidden w-full lg:block">
        <div className="mt-2 grid w-full grid-cols-3 grid-rows-4 gap-2">
          {shopData.map((item) => {
            return (
              <button
                key={item.id}
                className={`flex h-10 w-full items-center justify-center rounded-full bg-white hover:bg-[${item.color}]"} transition-colors`}
                onClick={() => handleButtonClick(item.id)}
                style={
                  item.id === chosenProductName ||
                  (item.id === currentHoverElementText && isHovering === true)
                    ? item.id === "VARIETY"
                      ? { backgroundColor: item.color, color: "#ffffff" }
                      : { backgroundColor: item.color }
                    : null
                }
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopProductOptions;
