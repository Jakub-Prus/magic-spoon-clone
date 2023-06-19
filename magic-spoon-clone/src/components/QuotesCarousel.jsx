import { useState, useEffect } from "react";
import QuoteCarouselItem from "./QuoteCarouselItem";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const QuotesCarousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const nextSlide = () => {
    if (selectedSlide === quotesData.length - 1) {
      setSelectedSlide(0);
    } else {
      setSelectedSlide((currentSlide) => currentSlide + 1);
    }
    console.log(selectedSlide);
  };

  const previousSlide = () => {
    if (selectedSlide === 0) {
      setSelectedSlide(quotesData.length - 1);
    } else {
      setSelectedSlide((currentSlide) => currentSlide - 1);
    }
    console.log(selectedSlide);
  };

  useEffect(() => {
    console.log("useEffect", selectedSlide);
  }, [selectedSlide]);

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

  return (
    <section className="flex h-72 w-full flex-row items-center justify-around bg-lightblue">
      <NavigateBeforeIcon
        style={{ fontSize: "2.2rem" }}
        className="text-purple"
        onClick={previousSlide}
      />
      <div className="flex flex-row overflow-x-auto">
        {quotesData.map(
          (item) =>
            selectedSlide.toString() === item.id && (
              <QuoteCarouselItem
                key={item.id}
                quote={item.quote}
                image={item.image}
              />
            )
        )}
      </div>
      <NavigateNextIcon
        style={{ fontSize: "2.2rem" }}
        className="text-purple"
        onClick={nextSlide}
      />
    </section>
  );
};

export default QuotesCarousel;
