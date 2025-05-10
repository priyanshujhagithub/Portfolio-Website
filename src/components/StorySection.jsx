import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import '../styles/StorySection.css';

const fadeSlide = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true }
};

const StorySection = () =>{
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end','end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);

    return (
        <section className="section" id="story" ref={sectionRef}>
            <div className="card">
                <motion.div
                  className="story-content"
                  style={{ scale, opacity }}
                  {...fadeSlide}
                >
                  <div className="about-heading-row">
                    <span className="about-section-number">02.</span>
                    <h2 className="about-title">My Journey</h2>
                    <div className="about-divider" />
                  </div>
                  <p>
                      I started with curiosity, fueled by creativity. From coding my first website to deploying full-scale applications, every project taught me something new. This journey is not just about lines of code, but
                      crafting experiences that connect.
                  </p>
                </motion.div>
            </div>
        </section>
    );
};

export default StorySection;