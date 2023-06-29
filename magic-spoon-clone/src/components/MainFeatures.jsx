import Feature from "./Feature";
import holdOnToTheDream from "../assets/img/hold-on-to-the-dream-white.svg";
import cereal1 from "../assets/img/cereals/cereal-1.png";
import cereal2 from "../assets/img/cereals/cereal-2.png";
import cereal3 from "../assets/img/cereals/cereal-3.png";
import cereal4 from "../assets/img/cereals/cereal-4.png";
import cereal5 from "../assets/img/cereals/cereal-5.png";
import cereal6 from "../assets/img/cereals/cereal-6.png";

const MainFeatures = () => {
  return (
    <section className="relative flex h-max w-full flex-col items-center justify-around bg-[#5b00ed]">
      {/* colorful */}
      <img
        src={cereal1}
        alt=""
        className="absolute -left-3 top-[50%] h-14 w-14 md:left-14 md:top-[42%] md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* little brown */}
      <img
        src={cereal2}
        alt=""
        className="absolute right-5 top-[88%] z-10 h-14 w-14 md:right-3/4 md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* bottom brown */}
      <img
        src={cereal3}
        alt=""
        className="absolute -right-6 top-[46%] z-10 h-14 w-14 md:right-16 md:top-[38%] md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* top brown */}
      <img
        src={cereal3}
        alt=""
        className="absolute -right-4 top-[2%] z-10 h-14 w-14 md:right-[70%] md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* pink */}
      <img
        src={cereal4}
        alt=""
        className="absolute right-10 top-[26%] z-10 h-14 w-14 md:right-[52%] md:top-[30%] md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* green */}
      <img
        src={cereal5}
        alt=""
        className="absolute left-14 top-[18%] z-10 block h-14 w-14 md:-top-[5%] md:hidden md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* white */}
      <img
        src={cereal6}
        alt=""
        className="absolute -top-[3%] left-4 z-10 h-14 w-14 md:-top-[30%] md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      {/* pink */}
      <img
        src={cereal4}
        alt=""
        className="absolute right-10 top-[26%] z-10 hidden h-14 w-14 md:-top-[30%] md:right-[2%] md:block md:h-20 md:w-20 md:animate-spin-super-slow"
      />
      <div className="flex h-max w-full flex-col items-center justify-around  md:flex-row">
        <div className="flex h-max w-full flex-col items-center justify-around py-10 md:w-[34vw]">
          <Feature
            title={"High Protein"}
            text={"12g-14g complete protein in every bowl."}
          />
          <Feature title={"Keto- Friendly"} text={"4g-5g net carbs per bowl."} />
          <Feature
            title={"Sweet & Delicious"}
            text={"Tastes just like you remember, only better."}
          />
        </div>
        <div className="relative h-max">
          <img
            src={holdOnToTheDream}
            alt=""
            className="absolute right-5 top-10 z-20 h-32 w-32 animate-spin-slow md:right-24 md:top-3/4 md:h-44 md:w-44"
          />
          <img
            src="src/assets/img/cereal-boxes.jpg"
            alt="cereal boxes"
            className="mt-20 md:mt-0 md:w-[66vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
