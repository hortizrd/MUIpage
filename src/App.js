import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Component from "./components/Component";
import ContactUs from "./components/ContactUs ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
      <Component/>
    </div>
  );
}

export default App;
