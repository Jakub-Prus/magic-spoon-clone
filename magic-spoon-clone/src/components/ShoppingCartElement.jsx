const ShoppingCartElement = ({ productName, price }) => {
  const absoluteMainImgPath = "src/assets/img/store/main-img/";
  return (
    <div className="flex w-full flex-row justify-between">
      <div className="w-[90px]">
        <img src={absoluteMainImgPath + productName + ".webp"} alt="product image" />
      </div>
      <div className="flex flex-col">
        <h4>{productName}</h4>
        <h4>plus i minus</h4>
      </div>
      <div className="flex flex-col">
        <button>x</button>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ShoppingCartElement;
