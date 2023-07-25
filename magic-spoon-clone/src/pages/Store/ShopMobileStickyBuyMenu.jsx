import { useSelector } from "react-redux";
import { selectShoppingCartOpen } from "../../redux/shoppingCartSlice";
import ShopChooseSize from "./ShopChooseSize";
import ShopSubscription from "./ShopSubscription";
import ShopAddToCartButton from "./ShopAddToCartButton";

const ShopMobileStickyBuyMenu = () => {
  const shoppingCartOpen = useSelector(selectShoppingCartOpen);
  return (
    <div
      className={`${
        shoppingCartOpen ? "invisible opacity-0" : "visible opacity-100"
      } fixed bottom-0 z-40 flex w-full items-center justify-center bg-white pt-1 transition-opacity lg:hidden `}
    >
      <div className="flex w-[90%] flex-col items-center justify-center">
        <ShopSubscription />
        <ShopChooseSize height={"2.5rem"} myButtons={"0rem"} mxButtons={"0rem"} />
        <ShopAddToCartButton height={"3rem"} fontSize={"1rem"} my={"0.75rem"} />
      </div>
    </div>
  );
};

export default ShopMobileStickyBuyMenu;
