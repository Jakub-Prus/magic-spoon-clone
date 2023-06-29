import { Link } from "react-router-dom";
import { useState } from "react";

const DropDownMenu = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`${
        isMenuOpen ? "bg-white " : " "
      }relative hidden h-32 w-40 self-start font-bold text-purple duration-300 sm:block`}
      onMouseEnter={toggleMenu}
      onMouseLeave={toggleMenu}
    >
      <Link to={data[0].linkPath} key={data[0].id}>
        <button className="mt-2 w-full text-xl tracking-wider duration-300 hover:underline">
          {data[0].title}
        </button>
      </Link>
      {isMenuOpen && (
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
