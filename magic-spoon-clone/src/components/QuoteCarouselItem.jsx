import wiggleLine from "../assets/img/wiggleline.svg";

const QuoteCarouselItem = ({ quote, image }) => {
  return (
    <div className="m-auto flex w-60 flex-col  items-center justify-center md:mx-10">
      <p className="mb-4 text-center text-sm font-normal text-purple md:text-2xl">
        {quote}
      </p>
      <img src={wiggleLine} alt="" className="mb-4 h-2" />
      <img src={image} alt="logo" className="h-5 md:h-6" />
    </div>
  );
};

export default QuoteCarouselItem;
