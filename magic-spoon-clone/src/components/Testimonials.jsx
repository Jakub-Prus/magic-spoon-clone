import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#5B01ED] via-[#5B01ED] to-[#C8EEFD] pb-36">
      <TestimonialsCarousel />
      <h2 className="w-64 text-center text-3xl text-white">
        Why did we grow up, but our cereal didn`t?
      </h2>
      <button className="mt-8 rounded-full border border-white  px-8 py-3 text-xl font-bold text-white   ">
        CONTACT US
      </button>
    </div>
  );
};

export default Testimonials;
