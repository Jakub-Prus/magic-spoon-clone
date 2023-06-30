import { Link } from "react-router-dom";

const MobileMenuNav = ({ text, linkPath, menuOpen, setMenuOpen }) => {
  const handleMenuItemClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Link to={linkPath} className="mb-8">
      <p
        className="text-outlined w-full py-6 text-center hover:opacity-90"
        onClick={handleMenuItemClick}
      >
        {text}
      </p>
    </Link>
  );
};

export default MobileMenuNav;
