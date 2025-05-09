import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaCode, FaUserGraduate } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer">
      <h3>Let's Connect</h3>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/priyanshu-jha-713672202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/priyanshujhagithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/ashu010/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <FaUserGraduate />
        </a>
        <a href="https://codeforces.com/profile/Pjha_coder" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
          <FaCode />
        </a>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Priyanshu Jha. All rights reserved.</p>
    </footer>
);

export default Footer;
