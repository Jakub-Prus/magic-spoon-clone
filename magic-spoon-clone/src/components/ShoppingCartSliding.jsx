import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingCartOpen,
  updateShoppingCartOpen,
} from "../redux/shoppingCartSlice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShoppingCartElement from "./ShoppingCartElement";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCartOpen = useSelector(selectShoppingCartOpen);
  console.log(shoppingCartOpen);

  return (
    <div
      className={`${
        shoppingCartOpen ? "opacity-100 " : "opacity-0 "
      }text-purple pointer-events-none absolute left-0 top-0 z-50 h-screen w-screen bg-[#6e64c8bf] transition-opacity duration-300 ease-in-out`}
    >
      <div
        className={`${
          shoppingCartOpen ? "translate-x-0 " : "translate-x-full "
        } pointer-events-auto absolute right-0 top-0 flex h-full w-[70vw]  flex-col bg-white px-5 py-3 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex w-full flex-row justify-between border-b-2 border-black">
          <button
            className="font-600 flex items-center justify-center  text-xs"
            onClick={() => dispatch(updateShoppingCartOpen())}
          >
            <ArrowBackIosNewIcon style={{ fontSize: "0.5rem" }} />
            CONTINUE SHOPPING
          </button>
          <p className="text-3xl font-bold">Your Cart</p>
        </div>
        <div>
          <ShoppingCartElement productName={"VARIETY"} price={39} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
