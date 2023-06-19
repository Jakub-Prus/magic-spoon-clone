import Promotion from "../../components/Promotion";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import DraggableSlider from "../../components/DraggableSlider";
import QuotesCarousel from "../../components/QuotesCarousel";
import MainFeatures from "../../components/MainFeatures";
import CallToAction from "../../components/CallToAction";
import Testimonials from "../../components/Testimonials";
import Gallery from "../../components/Gallery";
import LastCallToAction from "../../components/LastCallToAction";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-start">
      <Promotion amount="50" />
      <Nav />
      <Hero />
      <DraggableSlider />
      <QuotesCarousel />
      <MainFeatures />
      <CallToAction />
      <Testimonials />
      <Gallery />
      <LastCallToAction />
      <Footer />
    </div>
  );
};

export default Home;
