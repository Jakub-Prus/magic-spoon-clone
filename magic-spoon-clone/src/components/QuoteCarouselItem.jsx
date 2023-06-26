import wiggleLine from "../assets/img/wiggleline.svg";

const QuoteCarouselItem = ({ quote, image }) => {
  return (
    <div className="m-auto flex w-60 flex-col  items-center justify-center">
      <p className="font-base mb-4 text-center text-sm text-purple">{quote}</p>
      <img src={wiggleLine} alt="" className="mb-4 h-2" />
      <img src={image} alt="logo" className="h-5" />
    </div>
  );
};

export default QuoteCarouselItem;
