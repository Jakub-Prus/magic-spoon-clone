import Button from "./Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative -mt-8 flex h-screen w-full justify-center bg-[url('./assets/img/backgroundHero-mobile.webp')]  bg-cover pt-28 sm:bg-[url('./assets/img/backgroundHero.webp')]">
      <div className="mt-8 flex w-4/5 flex-col items-center text-center text-4xl font-extrabold text-purple md:mt-16 md:text-6xl lg:absolute lg:left-1/2 lg:top-40 lg:w-[45%] lg:items-start lg:text-start lg:text-7xl">
        <h2 className="mb-8">High protein cereal to power your days.</h2>
        <Link to="/shop">
          <Button text={"TRY NOW"} sizeX={"8"} sizeY={"4"} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
