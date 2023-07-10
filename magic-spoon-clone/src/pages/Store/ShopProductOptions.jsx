import { useState } from "react";

const ShopProductOptions = ({ data, chosenProduct, setChosenProduct }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentHoverElementText, setCurrentHoverElementText] = useState("");
  const handleButtonClick = (id) => {
    setChosenProduct(id);
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
          key={data[0].id}
          className="flex h-10 w-full items-center justify-center rounded-full bg-white"
          onClick={() => handleButtonClick(data[0].id)}
          style={
            data[0].id === chosenProduct
              ? { backgroundColor: data[0].color, color: "#ffffff" }
              : null
          }
        >
          {data[0].title}
        </button>
        <div className="mt-2 grid w-full grid-cols-2 grid-rows-6 gap-2">
          {data.slice(1).map((item) => {
            return (
              <button
                key={item.id}
                className={`flex h-10 w-full items-center justify-center rounded-full bg-white hover:bg-[${item.color}]`}
                onClick={() => handleButtonClick(item.id)}
                style={item.id === chosenProduct ? { backgroundColor: item.color } : null}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-8 hidden w-full lg:block">
        <div className="mt-2 grid w-full grid-cols-3 grid-rows-4 gap-2">
          {data.map((item) => {
            return (
              <button
                key={item.id}
                className={`flex h-10 w-full items-center justify-center rounded-full bg-white hover:bg-[${item.color}]"} transition-colors`}
                onClick={() => handleButtonClick(item.id)}
                style={
                  item.id === chosenProduct ||
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
