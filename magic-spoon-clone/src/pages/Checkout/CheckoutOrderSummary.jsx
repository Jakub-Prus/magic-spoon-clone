import { useSelector } from "react-redux";
import {
  selectItemsInShoppingCart,
  selectTotalPriceInShoppingCart,
} from "../../redux/shoppingCartSlice";
import CheckoutOrderSummaryElement from "./CheckoutOrderSummaryElement";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CheckoutOrderSummary = ({ showOrderSummary }) => {
  const itemsInShoppingCart = useSelector(selectItemsInShoppingCart);
  const totalPrice = useSelector(selectTotalPriceInShoppingCart);

  return (
    <div
      className={`${
        showOrderSummary
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } absolute top-0 flex w-full flex-col items-center bg-[#F4F6FF] transition-opacity duration-300 ease-in-out  `}
    >
      <div className="flex w-[90%] flex-col items-center border-b-[1px] border-b-gray-300 lg:w-3/5">
        <div className="mt-4 w-full">
          {itemsInShoppingCart.map((item) => (
            <CheckoutOrderSummaryElement
              key={item.shoppingCartItemId}
              productId={item.id}
              itemShopName={item.itemShopName}
              amount={item.amount}
              price={item.price}
            />
          ))}
        </div>
        <span className="mb-6 w-screen border-b-[1px] border-b-gray-300 lg:w-full"></span>
        <div className="mb-6 flex w-full flex-row items-center">
          <TextField
            id="outlined-basic"
            label="Gift card or discount code"
            className="w-5/6"
          />
          <div className="ml-4 flex h-14 w-20 items-center justify-center rounded-lg bg-[#c3c5cc]">
            <ArrowForwardIcon style={{ color: "white" }} />
          </div>
        </div>
        <span className="mb-4 w-screen border-b-[1px] border-b-gray-300 lg:w-full"></span>
        <div className="mb-4 w-full">
          <div className="mb-2 flex flex-row items-center justify-between">
            <span className="font-light text-gray-600">Subtotal</span>
            <span>{"$" + (totalPrice / 100).toFixed(2)}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <span className="font-light text-gray-600">Shipping</span>
            <span className="text-sm font-light text-gray-600">
              Calculated at next step
            </span>
          </div>
        </div>
        <span className="mb-4 w-screen border-b-[1px] border-b-gray-300 lg:w-full"></span>
        <div className="mb-4 w-full">
          <div className="mb-2 flex flex-row items-center justify-between text-lg">
            <span className="font-light text-gray-600">TOTAL</span>
            <span>{"$" + (totalPrice / 100).toFixed(2)}</span>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <span className="font-light text-gray-600">Recurring total</span>
            <span className="text-sm font-light text-gray-600">
              Calculated at next step
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderSummary;
