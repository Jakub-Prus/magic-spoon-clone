import LastCallToAction from "../../components/LastCallToAction";
import { Avatar } from "@mui/material";
import avatar1 from "../../assets/img/our-story/avatar1.png";
import avatar2 from "../../assets/img/our-story/avatar2.png";

const OurStory = () => {
  return (
    <section className="flex w-full grow flex-col items-center justify-start bg-[#bfefff]">
      <div className="relative mb-20 mt-44 h-max w-[90%] bg-[#e6f9ff] text-left text-base font-medium text-purple md:w-3/4 md:text-3xl md:font-medium">
        <div className="-mt-12 flex flex-row items-center justify-center gap-x-4 md:absolute md:-left-20 md:hidden md:flex-col md:justify-start">
          <Avatar alt="Founder 1" src={avatar1} style={{ width: 100, height: 100 }} />
          <Avatar alt="Founder 2" src={avatar2} style={{ width: 100, height: 100 }} />
        </div>
        <div className="top-20 -mt-12 hidden flex-row items-center justify-center gap-y-4 md:absolute md:-left-28 md:flex md:flex-col md:justify-start">
          <Avatar alt="Founder 1" src={avatar1} style={{ width: 150, height: 150 }} />
          <Avatar alt="Founder 2" src={avatar2} style={{ width: 150, height: 150 }} />
        </div>
        <div className="m-auto mt-12 flex w-[90%] flex-col items-center justify-start md:mt-24 md:w-4/5">
          <p className="mb-4">Hi, we’re Greg and Gabi, co-founders of Magic Spoon.</p>
          <p className="mb-4">
            We’ve been friends for ten years: met at college, lived together, even started
            a previous business together (you could call us “cereal” entrepreneurs…). We
            both grew up eating cereal every morning for breakfast, binging on the sugary
            crunch of the classic brands and then crashing in the afternoon when we were
            supposed to be at our most productive.
          </p>
          <p className="mb-4">
            Now that we’re adults, we’ve searched for years for a cereal that has the same
            addictive quality but actually fuels us. We've turned up nothing.
          </p>
          <p className="mb-4">
            Plus, as we learned more about the cereal industry, we were shocked by the
            true scope of the problem. The average American eats 100 bowls of cereal a
            year (this even includes people who don’t eat a single bowl!), and kids are
            one of the largest consumers. Yet almost every version in the aisle is stuck
            in that old paradigm of grains and sugar.
          </p>
          <p className="mb-4">
            We experimented for over a year to create a cereal inspired by the flavors and
            nostalgia of Saturday-morning-cartoon cereal but upgraded for a 21st-century
            consumer. A guilt-free treat that tastes like you remember and you can eat at
            any time of day.
          </p>
          <p className="mb-4">That’s what Magic Spoon is all about—we hope you enjoy!</p>
        </div>
      </div>
      <LastCallToAction />
    </section>
  );
};

export default OurStory;
