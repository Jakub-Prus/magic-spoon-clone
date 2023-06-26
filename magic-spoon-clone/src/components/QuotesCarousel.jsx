import QuoteCarouselItem from "./QuoteCarouselItem";
import Carousel from "nuka-carousel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const QuotesCarousel = () => {
  const quotesData = [
    {
      id: "0",
      quote: '"Magic Spoon is an adult version of what you loved as a kid."',
      image: "src/assets/img/quotes/fastco.png",
    },
    {
      id: "1",
      quote:
        '"With cereal that tastes this good and offers so much ... Magic Spoon may be the future of breakfast."',
      image: "src/assets/img/quotes/forbes.png",
    },
    {
      id: "2",
      quote:
        '"Magic Spoon has become my new go-to for one simple reason: it\'s delicious."',
      image: "src/assets/img/quotes/business-insider.png",
    },
  ];

  const renderCenterLeftControls = ({ previousDisabled, previousSlide }) => (
    <button
      className="m-3 ml-8 flex cursor-pointer appearance-none items-center border-none bg-transparent text-purple opacity-70 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={previousDisabled}
      onClick={previousSlide}
      aria-label="Go to previous slide"
    >
      <NavigateBeforeIcon size={32} />
    </button>
  );

  const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
    <button
      className="m-3 mr-8 flex cursor-pointer appearance-none items-center border-none bg-transparent text-purple opacity-70 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={nextDisabled}
      onClick={nextSlide}
      aria-label="Go to previous slide"
    >
      <NavigateNextIcon size={32} />
    </button>
  );

  const renderBottomCenterControls = ({ currentSlide, slideCount, goToSlide }) => (
    <div className="absolute -bottom-20 left-1/2 mx-auto -translate-x-1/2">
      {Array.from({ length: slideCount }, (_, index) => (
        <button
          key={index}
          className={`${
            currentSlide === index ? "bg-purple opacity-100 " : ""
          } mr-4 mt-20 h-4 w-4 rounded-full border-0 bg-purple p-0 text-xs text-purple opacity-50 `}
          onClick={() => goToSlide(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <section className="flex h-96 w-full flex-row items-center justify-center bg-lightblue">
      <div className="w-full">
        <Carousel
          wrapAround={true}
          slidesToShow={1}
          cellAlign="center"
          autoplay={true}
          autoplayInterval={4000}
          dragging={true}
          renderCenterLeftControls={renderCenterLeftControls}
          renderCenterRightControls={renderCenterRightControls}
          renderBottomCenterControls={renderBottomCenterControls}
        >
          {quotesData.map((item) => (
            <QuoteCarouselItem key={item.id} quote={item.quote} image={item.image} />
          ))}
        </Carousel>
      </div>
      {/* <NavigateBeforeIcon
        style={{ fontSize: "2.2rem" }}
        className="text-purple"
        onClick={previousSlide}
      /> */}
      {/* <div className="flex flex-row overflow-x-auto">
        {quotesData.map(
          (item) =>
            selectedSlide.toString() === item.id && (
              <QuoteCarouselItem key={item.id} quote={item.quote} image={item.image} />
            )
        )}
      </div>
      <NavigateNextIcon
        style={{ fontSize: "2.2rem" }}
        className="text-purple"
        onClick={nextSlide}
      /> */}
    </section>
  );
};

export default QuotesCarousel;
