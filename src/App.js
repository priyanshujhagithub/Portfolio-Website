import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StorySection from './components/StorySection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ParallaxProvider>
      <ToastContainer position="top-center" />
      <SocialSidebar />
      <div className="main-content">
        <Navbar />
        <Hero />
        <About />
        <StorySection />
        <Projects />
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </ParallaxProvider>
  );
}

export default App;