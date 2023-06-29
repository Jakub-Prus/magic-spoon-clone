import Hero from "../../components/Hero";
import DraggableSlider from "../../components/DraggableSlider";
import QuotesCarousel from "../../components/QuotesCarousel";
import MainFeatures from "../../components/MainFeatures";
import CallToAction from "../../components/CallToAction";
import Testimonials from "../../components/Testimonials";
import Gallery from "../../components/Gallery";
import LastCallToAction from "../../components/LastCallToAction";

const Home = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-start">
      <Hero />
      <DraggableSlider />
      <QuotesCarousel />
      <MainFeatures />
      <CallToAction />
      <Testimonials />
      <Gallery />
      <LastCallToAction />
    </div>
  );
};

export default Home;
