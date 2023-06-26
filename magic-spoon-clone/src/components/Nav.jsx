import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const iconSize = "2rem";
  return (
    <nav className="z-20 -mb-24 flex max-h-24 w-full grow flex-row items-center justify-between p-4  text-4xl">
      <HamburgerMenu />
      <div className="z-30 ml-8 flex grow flex-col items-center font-bold text-purple">
        <h1>MAGIC</h1>
        <h1>SPOON</h1>
      </div>
      <div className="z-30 flex min-w-[76px] justify-between text-purple">
        <PersonIcon style={{ fontSize: iconSize }} />
        <ShoppingBasketIcon style={{ fontSize: iconSize }} />
      </div>
    </nav>
  );
};

export default Nav;
