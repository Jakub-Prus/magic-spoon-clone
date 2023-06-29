import TestimonialsCarousel from "./TestimonialsCarousel";
import TestimonialsCarouselItem from "./TestimonialsCarouselItem";
import gifFromSide from "../assets/img/magic-spoon-home-pb2.webp";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: "0",
      text: '"I just ate delicious cereal for dinner and the last time I did that was my sophomore year in college!"',
      personName: "KELLY LEVEQUE",
      personAbout: "Holistic Nutritionist, Wellness Expert, and Celebrity Health Coach",
      avatarPath: "src/assets/img/testimonials/testimonials1.png",
    },
    {
      id: "1",
      text: '"When they said ‘Breakfast of Champions’, they meant Magic Spoon."',
      personName: "Priscilla Frederick-Loomis",
      personAbout: "Holistic Nutritionist, Wellness Expert, and Celebrity Health Coach",
      avatarPath: "src/assets/img/testimonials/testimonials2.jpg",
    },
    {
      id: "2",
      text: '"Magic Spoon is my adult life and kid life smashed into one fantastic box of cereal."',
      personName: "Natalie Duran",
      personAbout: "Rock Climber, Ninja Warrior, Neuroscientist, Producer",
      avatarPath: "src/assets/img/testimonials/testimonials3.jpg",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#FFCD66EC] via-[#5B01ED] to-[#C8EEFD] pb-36">
      <div className="hidden w-full flex-row md:flex">
        {testimonialsData.map((item) => (
          <TestimonialsCarouselItem
            key={item.id}
            text={item.text}
            personName={item.personName}
            personAbout={item.personAbout}
            avatarPath={item.avatarPath}
          />
        ))}
      </div>
      <TestimonialsCarousel testimonialsData={testimonialsData} />
      <div className="flex flex-col items-center justify-start md:my-40 md:flex-row">
        <h2 className="w-4/5 text-center text-4xl font-bold text-white md:ml-20 md:w-1/2 md:text-start md:text-7xl">
          Why did we grow up,{" "}
          <span
            style={{
              textStroke: "1px #ffffff",
              WebkitTextStroke: "1px #ffffff",
            }}
            className="text-transparent"
          >
            but our cereal didn`t?
          </span>
        </h2>
        <button className="mt-8 w-56 rounded-full border border-white px-8 py-3 text-xl font-bold text-white md:ml-10 md:border-2 md:px-2 md:py-3 md:text-2xl">
          OUR STORY
        </button>
        <img src={gifFromSide} alt="" className="hidden max-w-[400px] md:block" />
      </div>
    </div>
  );
};

export default Testimonials;
