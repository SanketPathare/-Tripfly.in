import Destination from "../components/Destination.jsx";
import Navbar from "../components/Navbar.jsx";
import Trip from "../components/Trip.jsx";
import Hero from "../components/hero.jsx";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://wallpapercave.com/wp/8wHHL7j.jpg"
        title="Your journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
       
        btnClass="show"
      />
      <Destination />
       <Trip/>
    </>
  );
}

export default Home;
