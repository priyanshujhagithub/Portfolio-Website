import React from 'react';
import '../styles/Projects.css';

const projects = [
{
    title: 'Threadly Social Media Web App',
    description: 'A full-stack social platform built with the MERN stack. Includes real-time updates, secure authentication, and scalable design.',
    link: 'https://github.com/priyanshujhagithub/Social-Media-Web-App',
},
{
    title: 'IoT Smart Inventory System',
    description: 'IoT-based system using ESP32 & sensors for smart inventory tracking with real-time alerts and web dashboard.',
    link: 'https://github.com/priyanshujhagithub/Inventory-Managment-Web-App',
},
{
    title: 'Workout Management Web App',
    description: 'MERN stack app for personalized workout planning with JWT auth, progress tracking, and smart recommendations.',
    link: 'https://github.com/SamriddhDiwan/GYM',
},
{
    title: 'Pollution Forecasting (Research)',
    description: 'Used EEMD + LSTM to predict PM 2.5 air pollution levels. Published in Springer with high accuracy models.',
    link: 'https://drive.google.com/file/d/1djnbQFGFug9vUoNVbg8CD4B8ZY8nvob9/view?usp=sharing',
},
];

const Projects = () => (
    <section id="projects" className="projects-section">
        <h2 className="projects-heading">Projects</h2>
        <div className="horizontal-scroll-container">
        {projects.map((project, index) => (
            <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        ))}
        </div>
    </section>
);

export default Projects;
