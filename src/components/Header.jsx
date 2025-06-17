import React from 'react';
import './Header.css';
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">EM</div>
        <nav className="nav">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact me</a>
        </nav>
      </div>

      <div className="hero">
        <div className="hero__text">
          <p>Hi, I am</p>
          <h1>Egor Mazyrko</h1>
          <p className="subtitle">Front-end Developer </p>
           <div className="social-buttons">
          <a
            href="https://github.com/EgorMaz230"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/твое_имя"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaInstagram  />
          </a>
          <a
            href="https://t.me/EgorMazyrko"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaTelegram />
          </a>
        </div>
        </div>
        <div className="hero__image">
          
       <img src={`${process.env.PUBLIC_URL}/img/profile.jpg`} alt="profile" />

        </div>
      </div>
      
    </header>
  );
};

export default Header;
