import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-start bg-black pb-10 text-white">
      <FooterMobile />
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
