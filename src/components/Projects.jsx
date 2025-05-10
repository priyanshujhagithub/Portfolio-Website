import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Projects.css';

const fadeSlide = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
  viewport: { once: true }
});

const projects = [
{
    title: 'Threadly Social Media Web App',
    description: 'A full-stack social platform built with the MERN stack. Includes real-time updates, secure authentication, and scalable design.',
    link: 'https://github.com/priyanshujhagithub/Social-Media-Web-App',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
},
{
    title: 'IoT Smart Inventory System',
    description: 'IoT-based system using ESP32 & sensors for smart inventory tracking with real-time alerts and web dashboard.',
    link: 'https://github.com/priyanshujhagithub/Inventory-Managment-Web-App',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
},
{
    title: 'Workout Management Web App',
    description: 'MERN stack app for personalized workout planning with JWT auth, progress tracking, and smart recommendations.',
    link: 'https://github.com/SamriddhDiwan/GYM',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
},
{
    title: 'Pollution Forecasting (Research)',
    description: 'Used EEMD + LSTM to predict PM 2.5 air pollution levels. Published in Springer with high accuracy models.',
    link: 'https://drive.google.com/file/d/1djnbQFGFug9vUoNVbg8CD4B8ZY8nvob9/view?usp=sharing',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
},
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center center', 'start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <motion.div style={{ scale, opacity }}>
        <div className="about-heading-row">
          <span className="about-section-number">03.</span>
          <h2 className="about-title">Projects</h2>
          <div className="about-divider" />
        </div>
        <div className="horizontal-scroll-container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              {...fadeSlide(0.15 * (index + 1))}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
