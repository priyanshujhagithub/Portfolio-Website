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
  'JavaScript', 'Express.js',
  'React.js', 'MongoDB',
  'Node.js', 'MySQL'
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
                  Hello! My name is Priyanshu and I enjoy creating things that live on the internet.
                  Currently, my focus is on developing <span className="about-link">innovative digital solutions</span> through projects like a <span className="about-link">Social Media Web App</span> built with the <span className="about-link">MERN stack</span>, an <span className="about-link">IoT-enabled Smart Inventory Management System</span> utilizing <span className="about-link">React, Node.js, and MongoDB</span>, and a <span className="about-link">Workout Web App</span> featuring secure <span className="about-link">JWT authentication</span>.
              </p>
              <p className="about-description">
                  I've honed my skills through certifications such as <span className="about-link">Full-stack Web Development Bootcamp</span>, <span className="about-link">Summer Analytics 2024 at IIT Guwahati</span>.
    
                  Beyond projects and coursework, I’ve contributed to <span className="about-link">Springer Publications</span> on <span className="about-link">pollution prediction models</span>, tackled over <span className="about-link">400 Leetcode problems</span>, and built proficiency in Web Technologies.
              </p>
              <div className="about-tech-list">
                <p>Here are a few technologies I've been working with recently:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                  <li>MySQL</li>
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