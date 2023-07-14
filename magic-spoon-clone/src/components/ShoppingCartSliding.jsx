import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingCartOpen,
  updateShoppingCartOpen,
  selectItemsInShoppingCart,
} from "../redux/shoppingCartSlice";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShoppingCartElement from "./ShoppingCartElement";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCartOpen = useSelector(selectShoppingCartOpen);
  const shoppingCartItems = useSelector(selectItemsInShoppingCart);
  console.log(shoppingCartItems);
  console.log(shoppingCartItems.length);

  return (
    <div
      className={`${
        shoppingCartOpen ? "opacity-100 " : "opacity-0 "
      }text-purple pointer-events-none absolute left-0 top-0 z-50 h-screen w-screen bg-[#6e64c8bf] transition-opacity duration-300 ease-in-out`}
    >
      <div
        className={`${
          shoppingCartOpen ? "translate-x-0 " : "translate-x-full "
        } pointer-events-auto absolute right-0 top-0 flex h-full w-screen flex-col bg-white px-5 py-3 transition-transform duration-300 ease-in-out md:w-[70vw] lg:w-[40vw]`}
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
          {shoppingCartItems.length === 0 ? (
            <div className="mt-8 w-full text-center">
              <div className="text-2xl">Your cart is empty!</div>
              <div className="mt-4 text-sm">Add your favorite items to your cart.</div>
              <Link to="/shop">
                <button
                  className="mt-4 w-full rounded-full bg-purple px-8 py-2 text-base text-white"
                  onClick={() => dispatch(updateShoppingCartOpen())}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          ) : (
            shoppingCartItems.map((item) => (
              <ShoppingCartElement
                key={item.id}
                productName={item.title}
                productId={item.id}
                price={item.price}
                size={item.size}
                amount={item.amount}
              />
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 z-40 mb-8 flex w-full items-center justify-center bg-white pt-1">
          <div className="flex w-[90%] flex-col items-center justify-center">
            <div className="flex justify-between">
              <div>SUBTOTAL()</div>
              <div></div>
            </div>
            <button
              className="flex w-full items-center justify-center rounded-full bg-purple uppercase text-white lg:w-4/5"
              style={{
                height: "3rem",
                fontSize: "1rem",
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
              }}
              // onClick={() => dispatch(addItemToShoppingCart(newShoppingCartItem))}
            >
              ADD TO CART <span className={"mx-2 line-through opacity-30"}>${0}</span>
              <span
              //
              >
                ${10 / 100}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
