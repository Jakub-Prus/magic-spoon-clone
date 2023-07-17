import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HamburgerMenu from "./HamburgerMenu";
import ShoppingCart from "./ShoppingCartSliding";
import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateShoppingCartOpen } from "../redux/shoppingCartSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const iconSize = "2rem";

  const dropDownMenuLeft = [
    {
      id: 0,
      title: "ABOUT US",
      linkPath: "/us-vs-them",
    },
    {
      id: 1,
      title: "US VS THEM",
      linkPath: "/us-vs-them",
    },
    {
      id: 2,
      title: "OUR STORY",
      linkPath: "/our-story",
    },
  ];

  const dropDownMenuRight = [
    {
      id: 0,
      title: "SHOP NOW",
      linkPath: "/shop",
    },
  ];

  return (
    <nav className="z-40 -mb-24 flex max-h-24 w-[90%] flex-row items-center justify-between p-4 text-4xl sm:ml-16 md:justify-center">
      <HamburgerMenu />
      <DropDownMenu data={dropDownMenuLeft} />
      <div
        className="z-30 -mr-4 flex w-32 flex-col justify-between font-bold text-purple sm:w-64 sm:items-center"
        style={{ lineHeight: "1.7rem" }}
      >
        <Link to="/">
          <h1>MAGIC</h1>
          <h1>SPOON</h1>
        </Link>
      </div>
      <div className="z-30 flex min-w-[76px] justify-between self-start text-purple">
        <DropDownMenu data={dropDownMenuRight} />
        <div className="sm:ml-8">
          <Link to="/">
            <PersonIcon style={{ fontSize: iconSize }} />
          </Link>

          <ShoppingBasketIcon
            style={{ fontSize: iconSize, marginLeft: "2rem" }}
            onClick={() => dispatch(updateShoppingCartOpen())}
          />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
