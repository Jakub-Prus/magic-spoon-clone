import Promotion from "../../components/Promotion";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import DraggableSlider from "../../components/DraggableSlider";
import QuotesCarousel from "../../components/QuotesCarousel";
import MainFeatures from "../../components/MainFeatures";
import CallToAction from "../../components/CallToAction";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";
import Gallery from "../../components/Gallery";
import LastCallToAction from "../../components/LastCallToAction";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="w-full grow flex flex-col justify-start items-center">
      <Promotion amount="50" />
      <Nav />
      <Hero />
      <DraggableSlider />
      <QuotesCarousel />
      <MainFeatures />
      <CallToAction />
      <TestimonialsCarousel />
      <Gallery />
      <LastCallToAction />
      <Footer />
    </div>
  );
};

export default Home;
