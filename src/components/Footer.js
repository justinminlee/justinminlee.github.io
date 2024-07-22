import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Justin Lee. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/justin-lee-a15013276/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/justinminlee" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;