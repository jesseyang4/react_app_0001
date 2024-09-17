// src/HamburgerMenu.js
import React, { useState } from 'react';
import './HamburgerMenu.css';
import { Link } from "react-router-dom";
import homeIcon from "../assets/images/home_icon.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar" style={{backgroundColor:"gray"}}></span>
        <span className="bar" style={{backgroundColor:"gray"}}></span>
        <span className="bar" style={{backgroundColor:"gray"}}></span>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={toggleMenu} className="menu_bg_white"><Link className="menu_home" to="/"><br /></Link></li>
          <li onClick={toggleMenu}><Link to="/about">关于NZLVGA</Link></li>
          <li onClick={toggleMenu}><Link to="/practice">日常训练</Link></li>
          <li onClick={toggleMenu}><Link to="/team">团队伙伴</Link></li>
          <li onClick={toggleMenu}><Link to="/location">训练基地</Link></li>
          <li onClick={toggleMenu}><Link to="/contact">联系我们</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;

