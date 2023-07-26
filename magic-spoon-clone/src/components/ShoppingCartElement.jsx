import { useDispatch } from "react-redux";
import {
  deleteItemInShoppingCart,
  updateAmountOfItemInShoppingCart,
} from "../redux/shoppingCartSlice";
import ClearIcon from "@mui/icons-material/Clear";

const ShoppingCartElement = ({
  productName,
  shoppingCartItemId,
  price,
  size,
  amount,
}) => {
  const dispatch = useDispatch();
  const absoluteMainImgPath = "assets/img/store/main-img/";

  return (
    <div className="-mt-[2px] mb-4 flex w-full flex-row justify-start border-t-2 border-black px-2 pt-4">
      <div className="w-[100px]">
        <img src={absoluteMainImgPath + productName + ".webp"} alt="product image" />
      </div>
      <div className="ml-4 flex flex-col ">
        <div className=" flex flex-row items-start justify-between">
          <h4 className="w-5/6 text-lg font-medium leading-5">
            {productName + " - 1 case (" + size + " boxes)"}
          </h4>
          <button
            onClick={() => dispatch(deleteItemInShoppingCart(shoppingCartItemId))}
            className="flex items-center justify-center"
          >
            <ClearIcon style={{ width: "15px" }} />
          </button>
        </div>
        <div className="mt-2 flex flex-row items-start justify-between ">
          <div className="flex flex-row rounded-full border-2 border-purple ">
            <button
              className="mr-2 px-2 text-base"
              onClick={() =>
                dispatch(
                  updateAmountOfItemInShoppingCart(
                    shoppingCartItemId,
                    amount - 1,
                    "decrement"
                  )
                )
              }
            >
              -
            </button>
            <span className="text-sm leading-6">{amount}</span>
            <button
              className="ml-2 px-2 text-base"
              onClick={() =>
                dispatch(
                  updateAmountOfItemInShoppingCart(
                    shoppingCartItemId,
                    amount + 1,
                    "increment"
                  )
                )
              }
            >
              +
            </button>
          </div>
          <p className="text-xl">{"$" + (price / 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartElement;
