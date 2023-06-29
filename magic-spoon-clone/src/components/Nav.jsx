import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HamburgerMenu from "./HamburgerMenu";
import ShoppingCart from "./ShoppingCart";
import DropDownMenu from "./DropDownMenu";

const Nav = () => {
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
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
      linkPath: "",
    },
  ];

  const dropDownMenuRight = [
    {
      id: 0,
      title: "SHOP NOW",
      linkPath: "",
    },
    {
      id: 1,
      title: "BUNDLES",
      linkPath: "",
    },
    {
      id: 2,
      title: "CEREAL",
      linkPath: "",
    },
  ];

  const handleShoppingCartClick = () => {
    setShoppingCartOpen(!shoppingCartOpen);
  };

  return (
    <nav className="z-40 -mb-24 flex max-h-24 w-[90%] flex-row items-center justify-between p-4 text-4xl sm:ml-16 md:justify-center">
      <HamburgerMenu />
      <DropDownMenu data={dropDownMenuLeft} />
      <div
        className="z-30 flex w-32 flex-col justify-between font-bold text-purple sm:w-64 sm:items-center"
        style={{ lineHeight: "1.7rem" }}
      >
        <h1>MAGIC</h1>
        <h1>SPOON</h1>
      </div>
      <div className="z-30 flex min-w-[76px] justify-between self-start text-purple">
        <DropDownMenu data={dropDownMenuRight} />
        <div className="sm:ml-8">
          <PersonIcon style={{ fontSize: iconSize }} />
          <ShoppingBasketIcon
            style={{ fontSize: iconSize }}
            onClick={handleShoppingCartClick}
          />
          <ShoppingCart
            shoppingCartOpen={shoppingCartOpen}
            setShoppingCartOpen={setShoppingCartOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
