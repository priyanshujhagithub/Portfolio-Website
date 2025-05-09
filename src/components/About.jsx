import React from 'react';
import {motion} from 'framer-motion';
import '../styles/About.css';

const About = () =>(
    <section id='about' className='about-section'>
        <motion.div
            className='about-content'
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.8,ease:'easeOut'}}
            viewport={{once:true}}
        >
            <h2>About Me</h2>
            <p>
                I'm a full-stack web developer passionate about crafting visually engaging user experiences. I enjoy blending design with code to bring ideas to life in the browser. My expertise lies in React, CSS animations, and performance optimization.
            </p>
        </motion.div>
    </section>
);

export default About;