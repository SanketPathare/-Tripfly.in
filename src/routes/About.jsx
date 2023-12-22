import Hero from "../components/hero.jsx";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/images/3.jpg";

import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" />
      <AboutUs />
    </>
  );
}

export default About;
