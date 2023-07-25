import { useSelector, useDispatch } from "react-redux";
import { selectTotalPriceInShoppingCart } from "../../redux/shoppingCartSlice";
import {
  selectShowOrderSummary,
  updateShowOrderSummary,
} from "../../redux/checkoutSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckoutOrderSummary from "./CheckoutOrderSummary";

const CheckoutMobileSumPrice = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPriceInShoppingCart);
  const showOrderSummary = useSelector(selectShowOrderSummary);

  return (
    <div className="mb-4 flex w-full flex-col items-center bg-[#fafafa] pt-4">
      <div
        className="m-auto flex w-[90%] flex-row items-center justify-between lg:w-3/5 "
        onClick={() => dispatch(updateShowOrderSummary())}
      >
        <div className="text-purple">
          <ShoppingCartIcon style={{ color: "#3f0791" }} className="" />
          <span className="ml-2 text-sm font-light">Show order summary</span>
          <KeyboardArrowDownIcon
            className={`${showOrderSummary ? "rotate-180 transform" : ""}`}
          />
        </div>
        <span className="text-lg">{"$" + (totalPrice / 100).toFixed(2)}</span>
      </div>
      <span className="w-screen border-b-[1px] border-b-gray-300 pt-3"></span>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <CheckoutOrderSummary showOrderSummary={showOrderSummary} />
      </div>
    </div>
  );
};

export default CheckoutMobileSumPrice;
