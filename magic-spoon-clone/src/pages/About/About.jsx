import Chart from "../../assets/img/about/chart.png";
import usCereal from "../../assets/img/about/us-cereals.png";
import cerealIlustrator from "../../assets/img/about/cereal-illustrator.svg";
import LastCallToAction from "../../components/LastCallToAction";

const About = () => {
  return (
    <section className="flex w-full grow flex-col items-center justify-start bg-gradient-to-b from-[#FFEE83] to-[#5B00ED]">
      <div className="relative -mt-8 flex h-screen w-full justify-center pt-44 ">
        <div className="mt-8 flex w-[90%] flex-col items-center text-center text-xl font-semibold text-purple md:absolute md:left-1/2 md:top-40 md:w-[45%] md:items-start md:text-start md:text-7xl">
          <h2 className="mb-2">
            Remember the carefree days of childhood, when you didn't have to worry about
            empty carbs and sugar crashes? Well, now you can have your cereal and eat it
            too. We re-engineered that same great taste with grown-up ingredients for a
            game-changing cereal 2.0. See how we stack up against the others:
          </h2>
        </div>
      </div>
      <div className="h-max w-full bg-white py-16">
        <img src={Chart} alt="" className="h-auto w-full" />
      </div>
      <div className="h-max w-[90%] py-16">
        <div className="relative h-max w-full">
          <img src={usCereal} alt="" className="h-auto w-full" />
          <img
            src={cerealIlustrator}
            alt=""
            className="absolute right-0 top-0 w-[360px]"
          />
        </div>
        <div className="p relative h-max w-full text-white">
          <h2 className="pb-4 text-2xl">Our sweet little secret:</h2>
          <p className="text-base font-light">
            We use a natural blend of monk fruit and allulose. Allulose has almost zero
            glycemic impact and almost zero calories (less than 0.4 cal/g).
          </p>
        </div>
      </div>
      <LastCallToAction />
    </section>
  );
};

export default About;
