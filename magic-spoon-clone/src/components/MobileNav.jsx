import MobileMenuNav from "./MobileMenuNav";
import holdOnToTheDream from "../assets/img/hold-on-to-the-dream.svg";

const MobileNav = ({ menuOpen, setMenuOpen }) => {
  return (
    <section
      // id="mobile-menu"
      className={`${
        menuOpen ? "flex " : "hidden "
      } top-68 justify-content-center absolute left-0 top-10 z-20 w-screen origin-top animate-open-menu flex-col items-center bg-black bg-gradient-to-r from-[#A6F6FF] to-[#FFEE83] text-5xl`}
    >
      <nav
        className="section-min-height z-10 mt-20 flex flex-col items-center pt-8 text-transparent"
        aria-label="mobile"
      >
        <MobileMenuNav
          text="US VS. THEM"
          linkPath="/us-vs-them"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenuNav
          text="OUR STORY"
          linkPath="/our-story"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenuNav
          text="BUNDLES"
          linkPath="/"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenuNav
          text="CEREAL"
          linkPath="/shop"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <img src={holdOnToTheDream} alt="" className="mt-8 h-32 w-32 animate-spin-slow" />
      </nav>
    </section>
  );
};

export default MobileNav;
