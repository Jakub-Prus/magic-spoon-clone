import Chart from "../../assets/img/chart.png";

const About = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-start bg-gradient-to-b from-[#FFCD66EC] to-[#5B01ED]">
      <section className="relative -mt-8 flex h-screen w-full justify-center  pb-24 pt-44 ">
        <div className="mt-8 flex w-[90%] flex-col items-center text-center text-xl font-semibold text-purple md:absolute md:left-1/2 md:top-40 md:w-[45%] md:items-start md:text-start md:text-7xl">
          <h2 className="mb-8">
            Remember the carefree days of childhood, when you didn't have to worry about
            empty carbs and sugar crashes? Well, now you can have your cereal and eat it
            too. We re-engineered that same great taste with grown-up ingredients for a
            game-changing cereal 2.0. See how we stack up against the others:
          </h2>
        </div>
      </section>
      <section className="h-max w-full bg-white py-16">
        <img src={Chart} alt="" className="h-auto w-full" />
      </section>
    </div>
  );
};

export default About;
