import Hero from "../components/hero.jsx";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/images/2.jpg";
import Trip from "../components/Trip.jsx";
// import Footer from "../components/Footer";
// import AboutUs from "../components/AboutUs";

function Service() {
  return (
    <>
      <Navbar/>
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service"/>
      <Trip/>
    </>
  );
}

export default Service;
