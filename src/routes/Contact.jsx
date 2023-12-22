import Hero from "../components/hero.jsx";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/images/1.jpg";
import ContactForm from "../components/ContactForm.jsx";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" 
      heroImg={ContactImg} 
      title="Contact"/>
      <ContactForm/>
    </>
  );
}

export default Contact;
