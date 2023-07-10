const ShopChooseSize = ({
  chosenSize,
  handleSizeButtonClick,
  my,
  height,
  myButtons,
  mxButtons,
}) => {
  return (
    <div
      className="relative flex w-full rounded-full border-2 border-purple"
      style={{ marginTop: my, marginBottom: my, height: height }}
    >
      <button
        key={4}
        className={`flex w-1/2 items-center justify-center rounded-full px-12 py-4 text-center text-base font-medium text-purple transition-colors duration-200 ease-in-out ${
          chosenSize === 4 ? "bg-purple text-white" : ""
        }`}
        onClick={() => handleSizeButtonClick(4)}
        style={{
          marginTop: myButtons,
          marginBottom: myButtons,
          marginLeft: mxButtons,
          marginRight: -mxButtons,
        }}
      >
        4 PACK
      </button>
      <button
        key={6}
        className={`flex w-1/2 items-center justify-center rounded-full px-12 py-4 text-center text-base font-medium text-purple transition-colors duration-200 ease-in-out ${
          chosenSize === 6 ? "bg-purple text-white" : ""
        }`}
        onClick={() => handleSizeButtonClick(6)}
        style={{
          marginTop: myButtons,
          marginBottom: myButtons,
          marginLeft: -mxButtons,
          marginRight: mxButtons,
        }}
      >
        6 PACK
      </button>
      <img
        src="/src/assets/img/store/5-discount.svg"
        alt=""
        className="absolute -right-4 -top-3"
      />
    </div>
  );
};

export default ShopChooseSize;