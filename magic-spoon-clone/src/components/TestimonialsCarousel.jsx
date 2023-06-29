import TestimonialsCarouselItem from "./TestimonialsCarouselItem";
import Carousel from "nuka-carousel";

const TestimonialsCarousel = ({ testimonialsData }) => {
  const renderCenterLeftControls = ({ previousDisabled, previousSlide }) => (
    <button
      className="m-3 ml-5 flex cursor-pointer appearance-none items-center border-none bg-transparent text-purple opacity-70 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={previousDisabled}
      onClick={previousSlide}
      aria-label="Go to previous slide"
    ></button>
  );

  const renderCenterRightControls = ({ nextDisabled, nextSlide }) => (
    <button
      className="m-3 mr-5 flex cursor-pointer appearance-none items-center border-none bg-transparent text-purple opacity-70 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-30"
      disabled={nextDisabled}
      onClick={nextSlide}
      aria-label="Go to previous slide"
    ></button>
  );

  const renderBottomCenterControls = ({ currentSlide, slideCount, goToSlide }) => (
    <div className="absolute -top-16 left-1/2 mx-auto -translate-x-1/2">
      {Array.from({ length: slideCount }, (_, index) => (
        <button
          key={index}
          className={`${
            currentSlide === index ? "!bg-purple " : ""
          } mr-4 mt-20 h-4 w-4 rounded-full border-0 bg-[#3f079199] p-0 text-xs text-transparent`}
          onClick={() => goToSlide(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex w-[90%] flex-col items-center md:hidden">
      <div className="mt-2 w-full">
        <Carousel
          wrapAround={true}
          slidesToShow={1}
          cellAlign="center"
          autoplay={true}
          autoplayInterval={6000}
          dragging={true}
          renderCenterLeftControls={renderCenterLeftControls}
          renderCenterRightControls={renderCenterRightControls}
          renderBottomCenterControls={renderBottomCenterControls}
        >
          {testimonialsData.map((item) => (
            <TestimonialsCarouselItem
              key={item.id}
              text={item.text}
              personName={item.personName}
              personAbout={item.personAbout}
              avatarPath={item.avatarPath}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
