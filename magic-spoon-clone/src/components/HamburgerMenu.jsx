import { useState } from "react";
import MobileNav from "./MobileNav";
const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <button
        onClick={handleMenuClick}
        className={`${
          menuOpen ? "toggle-btn " : ""
        }relative z-50 h-8 w-8 cursor-pointer text-3xl lg:hidden`}
      >
        {/* <!-- &#9776; --> */}
        <div className="absolute top-4 -mt-2 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
      </button>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default HamburgerMenu;
