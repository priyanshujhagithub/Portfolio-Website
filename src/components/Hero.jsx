import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const fadeSlide = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
});

const Hero = () => (
  <section id='hero' className='hero-section'>
    <div className='hero-content'>
      <Parallax speed={-20}>
        <motion.div {...fadeSlide(0)}>
          <h1 className='hero-title gradient-text'>Hi, I'm Priyanshu Jha</h1>
        </motion.div>
      </Parallax>
      <Parallax speed={10}>
        <motion.div {...fadeSlide(0.2)}>
          <p className='hero-subtitle'>Full-Stack Web Developer • AI-Enthusiast</p>
        </motion.div>
      </Parallax>
      <Parallax speed={-5}>
        <motion.div {...fadeSlide(0.4)}>
          <a href='#contact' className='hero-button hero-outline'>Contact</a>
        </motion.div>
      </Parallax>
    </div>
    <div className='hero-image-container'>
      <div className='hero-image-overlay'></div>
      <img
        src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&h=500&q=80'
        alt='Profile Placeholder'
        className='hero-image'
      />
    </div>
  </section>
);

export default Hero;