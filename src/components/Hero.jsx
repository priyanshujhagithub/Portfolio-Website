import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import '../styles/Hero.css';

const Hero = ()=>(
    <section id='hero' className='hero-container'>
        <Parallax speed={-20}>
            <h1 className='hero-title'>Hi, I'm Priyanshu Jha</h1>
        </Parallax>
        <Parallax speed={10}>
            <p className='hero-subtitle'>Full-Stack Web Developer • AI-Enthusiast</p>
        </Parallax>
        <Parallax speed={-5}>
            <a href='#projects' className='hero-button'>View My Work</a>
        </Parallax>
    </section>
);

export default Hero;