import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Nav = () => {
  const iconSize = "2rem";
  return (
    <nav className="w-full max-h-24 -mb-24 flex flx-row justify-between items-center grow p-4 text-4xl  z-10">
      <MenuIcon style={{ fontSize: "2.5rem" }} />
      <div className="flex flex-col grow ml-8 items-center font-bold text-purple">
        <h1>MAGIC</h1>
        <h1>SPOON</h1>
      </div>
      <div className="text-purple min-w-[76px] flex justify-between">
        <PersonIcon style={{ fontSize: iconSize }} />
        <ShoppingBasketIcon style={{ fontSize: iconSize }} />
      </div>
    </nav>
  );
};

export default Nav;
