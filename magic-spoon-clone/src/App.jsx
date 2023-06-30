import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import OurStory from "./pages/OurStory/OurStory";
import ShopCereal from "./pages/Store/ShopCereal";

function App() {
  return (
    <div className="flex h-screen min-h-screen w-screen grow flex-col items-center justify-start overflow-x-hidden font-maven font-medium">
      <Promotion amount="50" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us-vs-them" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/shop" element={<ShopCereal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
