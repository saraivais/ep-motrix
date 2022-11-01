import React from 'react';
import linkedin from '../icons/linkedin-svgrepo-com.svg';
import github from '../icons/github-svgrepo-com.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">Desenvolvido por Isadora Saraiva - Outubro/2022</p>
      <div>
        <a href="https://www.linkedin.com/in/isadorasaraiva/" target="_blank" rel="noreferrer">
          <img className="footer-link-images" src={linkedin} alt="linkedin-icon" />
        </a>
        <a href="https://github.com/saraivais" target="_blank" rel="noreferrer">
          <img className="footer-link-images" src={github} alt="github-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
