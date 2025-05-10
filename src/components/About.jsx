import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import '../styles/About.css';

const fadeSlide = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
  viewport: { once: true }
});

const technologies = [
  'JavaScript (ES6+)', 'TypeScript',
  'React', 'Eleventy',
  'Node.js', 'WordPress'
];

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center center', 'start end', 'end start'],
  });
  // Map scroll progress: 0.5 (centered) => 1, 0/1 (top/bottom) => 0.6
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <motion.div className="about-container" style={{ scale, opacity }}>
        <Parallax speed={-10}>
          <div className="about-left">
            <motion.div {...fadeSlide(0)}>
              <div className="about-heading-row">
                <span className="about-section-number">01.</span>
                <h2 className="about-title">About Me</h2>
                <div className="about-divider" />
              </div>
              <p className="about-description">
                Hello! My name is Priyanshu and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="about-description">
                Fast-forward to today, and I've had the privilege of working at <span className="about-link">an advertising agency</span>, <span className="about-link">a start-up</span>, <span className="about-link">a huge corporation</span>, and <span className="about-link">a student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="about-link">Upstatement</span> for a variety of clients.
              </p>
              <p className="about-description">
                I also recently <span className="about-link">launched a course</span> that covers everything you need to build a web app with the Spotify API using Node & React.
              </p>
              <div className="about-tech-list">
                <p>Here are a few technologies I've been working with recently:</p>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Eleventy</li>
                  <li>Node.js</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Parallax>
        <Parallax speed={10}>
          <div className="about-right">
            <motion.div className="about-image-card" {...fadeSlide(0.2)}>
              <img
                src="/profile.png"
                alt="Priyanshu Jha"
                className="about-photo-img"
              />
            </motion.div>
          </div>
        </Parallax>
      </motion.div>
    </section>
  );
};

export default About;