const CheckoutOrderSummaryElement = ({ productId, itemShopName, amount, price }) => {
  const absoluteMainImgPath = "./assets/img/store/main-img/";
  return (
    <div className="mb-5 flex w-full flex-row items-center justify-around">
      <div className="flex w-full flex-row items-center">
        <div className="relative w-20 rounded-3xl border-[1px] border-[#fad9d9] bg-white">
          <img
            src={absoluteMainImgPath + productId + ".webp"}
            alt=""
            className="-ml-1 p-2"
          />
          <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#727272e6] text-sm text-white">
            {amount}
          </div>
        </div>
        <span className="ml-3 text-sm">{itemShopName}</span>
      </div>

      <div className="">{"$" + (price / 100).toFixed(2)}</div>
    </div>
  );
};

export default CheckoutOrderSummaryElement;
