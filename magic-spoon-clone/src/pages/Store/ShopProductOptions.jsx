const ShopProductOptions = ({ data, chosenProduct, setChosenProduct }) => {
  const handleButtonClick = (id) => {
    setChosenProduct(id);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center text-sm font-semibold text-purple">
      <h2 className="mb-4 text-lg uppercase">1. Choose your flavor</h2>
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
  );
};

export default ShopProductOptions;
