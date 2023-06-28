import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ShoppingCart = ({ shoppingCartOpen, setShoppingCartOpen }) => {
  console.log(shoppingCartOpen);

  const handleContinueShopping = () => {
    setShoppingCartOpen(!shoppingCartOpen);
  };

  return (
    <div
      className={`${
        shoppingCartOpen ? "block " : "hidden "
      }text-purple absolute left-0 top-0 z-50 h-screen w-screen bg-white`}
    >
      <div className="flex w-full flex-row justify-between border-b-2 border-black px-5 py-3">
        <button
          className="font-600 flex items-center justify-center  text-xs"
          onClick={handleContinueShopping}
        >
          <ArrowBackIosNewIcon style={{ fontSize: "0.5rem" }} />
          CONTINUE SHOPPING
        </button>
        <p className="text-2xl font-bold">Your Cart</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
