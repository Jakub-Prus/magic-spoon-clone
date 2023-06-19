import TestimonialsCarouselItem from "./TestimonialsCarouselItem";
import testimonialPhoto1 from "../assets/img/testimonials/testimonials1.png";

const TestimonialsCarousel = () => {
  return (
    <div className="flex w-4/5 flex-col items-center">
      <TestimonialsCarouselItem
        text={
          "I just ate delicious cereal for dinner and the last time I did that was my sophomore year in college!"
        }
        personName={"KELLY LEVEQUE"}
        personAbout={
          "Holistic Nutritionist, Wellness Expert, and Celebrity Health Coach"
        }
        avatarPath={testimonialPhoto1}
      />
    </div>
  );
};

export default TestimonialsCarousel;
