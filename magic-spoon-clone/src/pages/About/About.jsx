import Chart from "../../assets/img/about/chart.png";
import usCereal from "../../assets/img/about/us-cereals.png";
import cerealIlustrator from "../../assets/img/about/cereal-illustrator.svg";
import LastCallToAction from "../../components/LastCallToAction";

const About = () => {
  return (
    <section className="flex w-full grow flex-col items-center justify-start bg-gradient-to-b from-[#FFEE83] to-[#5B00ED]">
      <div className="relative -mt-8 flex h-full w-full justify-center pt-44 ">
        <div className="mt-8  w-[90%] text-center text-xl font-semibold text-purple md:w-3/4 md:text-3xl md:font-medium">
          <h2 className="mb-2">
            Remember the carefree days of childhood, when you didn't have to worry about
            empty carbs and sugar crashes? Well, now you can have your cereal and eat it
            too. We re-engineered that same great taste with grown-up ingredients for a
            game-changing cereal 2.0. See how we stack up against the others:
          </h2>
        </div>
      </div>
      <div className="flex h-max w-full justify-center bg-white py-16">
        <img src={Chart} alt="" className="h-auto w-full md:w-4/5" />
      </div>
      <div className="h-max w-[90%] py-16 sm:flex sm:flex-row sm:items-center sm:justify-center">
        <div className="relative ml-10 flex h-max w-4/5 items-center justify-center sm:mr-10 sm:w-4/5 sm:justify-end">
          <img src={usCereal} alt="" className="h-auto w-full sm:w-[270px]" />
          <img
            src={cerealIlustrator}
            alt=""
            className="absolute right-0 top-0 w-[360px] sm:w-[260px] "
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
