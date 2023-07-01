const ShopProductOptions = ({ data }) => {
  console.log(data);
  return (
    <div className="flex w-full flex-col items-center justify-center text-purple">
      <h2>1. Choose your flavor</h2>
      <button
        key={data[0].id}
        className="flex h-10 w-full items-center justify-center rounded-full bg-white"
      >
        {data[0].title}
      </button>
      <div className="mt-2 grid w-full grid-cols-2 grid-rows-6 gap-2">
        {data.slice(1).map((item) => (
          <button
            key={item.id}
            className="flex h-10 w-full items-center justify-center rounded-full bg-white"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopProductOptions;
