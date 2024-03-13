import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
//import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg="https://images.unsplash.com/photo-1562112446-28188e26ae0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
