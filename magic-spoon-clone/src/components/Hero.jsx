import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative -mt-8 flex h-screen w-full justify-center bg-[url('./assets/img/backgroundHero-mobile.webp')]  bg-cover pt-28 sm:bg-[url('./assets/img/backgroundHero.webp')]">
      <div className="mt-8 flex w-4/5 flex-col items-center text-center text-4xl font-extrabold text-purple md:absolute md:left-1/2 md:top-40 md:w-[45%] md:items-start md:text-8xl">
        <h2>High protein cereal to power your days.</h2>
        <Button text={"TRY NOW"} sizeX={"8"} sizeY={"4"} />
      </div>
    </section>
  );
};

export default Hero;
