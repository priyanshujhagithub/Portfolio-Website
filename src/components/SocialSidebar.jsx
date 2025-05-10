import React from 'react';
import '../styles/SocialSidebar.css';

const codeforcesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="18" height="4" rx="2" fill="#1F8ACB"/>
    <rect x="10" y="3" width="4" height="18" rx="2" fill="#F5C518"/>
  </svg>
);

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <div className="sidebar-logo">
        <svg width="56" height="64" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="28,4 52,18 52,46 28,60 4,46 4,18" stroke="#3ff0c6" strokeWidth="4" fill="none" />
          <text x="28" y="38" textAnchor="middle" fontFamily="Poppins, Inter, sans-serif" fontWeight="700" fontSize="22" fill="#3ff0c6" dominantBaseline="middle">P</text>
        </svg>
      </div>
      <div className="sidebar-icons">
        <a href="https://github.com/priyanshujhagithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="/github.png" alt="GitHub" style={{ width: 24, height: 24, display: 'block' }} />
        </a>
        <a href="https://www.linkedin.com/in/priyanshu-jha-713672202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/linkedin.png" alt="LinkedIn" style={{ width: 24, height: 24, display: 'block' }} />
        </a>
        <a href="https://leetcode.com/u/ashu010/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <img src="/leetcode.png" alt="LeetCode" style={{ width: 24, height: 24, display: 'block' }} />
        </a>
        <a href="https://codeforces.com/profile/Pjha_coder" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
          <img src="/codeforces.png" alt="Codeforces" style={{ width: 24, height: 24, display: 'block' }} />
        </a>
      </div>
      <div className="sidebar-line"></div>
    </div>
  );
} 