import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import '../styles/StorySection.css';

const StorySection = () =>{
    const setionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end','end start'],
    });

    const scale = useTransform(scrollYProgress,[0,1],[0.8,1]);
    const opacity = useTransform(scrollYProgress,[0,1],[0,1]);

    return (
        <section id="story" className="story-section" ref={sectionRef}>
            <motion.div className="story-content" style={{ scale, opacity }}>
                <h2>My Journey</h2>
                <p>
                    I started with curiosity, fueled by creativity. From coding my first website to deploying full-scale applications, every project taught me something new. This journey is not just about lines of code, but
                    crafting experiences that connect.
                </p>
            </motion.div>
        </section>
    );
};

export default StorySection;