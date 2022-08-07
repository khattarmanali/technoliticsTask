import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Hero from "./pages/Hero";
import Protient from "./pages/Protient";
import Review from "./pages/Review";
function App() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Protient />
      <AboutUs />
      <Review />

      <Footer />
    </div>
  );
}

export default App;
