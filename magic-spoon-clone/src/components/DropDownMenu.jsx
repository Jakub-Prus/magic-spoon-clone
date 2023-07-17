import { Link } from "react-router-dom";
import { useState } from "react";

const DropDownMenu = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuHeight = data.length === 3 ? "8rem" : "3.4rem";
  console.log(menuHeight);
  return (
    <div
      className={`${
        isMenuOpen ? "bg-white " : " "
      }relative hidden w-40 self-start rounded-3xl font-bold text-purple duration-300 lg:block`}
      style={{ height: menuHeight }}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <Link to={data[0].linkPath} key={data[0].id}>
        <button className="mt-2 w-full text-xl tracking-wider duration-300 hover:underline">
          {data[0].title}
        </button>
      </Link>
      {isMenuOpen && data.length > 1 && (
        <div className="absolute w-full pb-4 duration-300">
          {data.slice(1).map((item) => (
            <Link to={item.linkPath} key={data.id}>
              <button className="w-full text-xl tracking-wider duration-300  hover:underline">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
