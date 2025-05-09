import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StorySection from './components/StorySection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <About />
      <StorySection />
      <Projects />
      <Contact />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;