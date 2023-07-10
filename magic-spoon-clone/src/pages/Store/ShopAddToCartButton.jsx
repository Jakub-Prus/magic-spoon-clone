const ShopAddToCartButton = ({
  price,
  discountedPrice,
  toggledSubscription,
  toggledDiscountedPrice,
  height,
  fontSize,
  my,
}) => {
  return (
    <button
      className="flex w-full items-center justify-center rounded-full bg-purple uppercase text-white lg:w-4/5"
      style={{ height: height, fontSize: fontSize, marginTop: my, marginBottom: my }}
    >
      ADD TO CART{" "}
      <span
        className={`${
          toggledSubscription || toggledDiscountedPrice ? "line-through opacity-30" : " "
        } mx-2`}
      >
        ${price}
      </span>
      <span
        className={`${
          toggledSubscription || toggledDiscountedPrice ? "block" : "hidden"
        }`}
      >
        ${discountedPrice}
      </span>
    </button>
  );
};

export default ShopAddToCartButton;
