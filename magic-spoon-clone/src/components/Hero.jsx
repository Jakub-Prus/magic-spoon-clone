import Button from "./Button";

const Hero = () => {
  return (
    <section className="-mt-8 h-screen w-full bg-[url('./assets/img/backgroundHero-mobile.webp')] bg-cover  pt-28 text-4xl">
      <div className="mt-6 flex grow flex-col items-center font-extrabold text-purple">
        <h2>High protein</h2>
        <h2>cereal to power</h2>
        <h2>your days.</h2>
        <Button text={"TRY NOW"} />
      </div>
    </section>
  );
};

export default Hero;
