import React, { useEffect } from "react";
import logo from "./logo.svg";
import "../assets/css/style.css";
import homeIcon from "../assets/images/home_icon.png";
import hamburgerIcon from "../assets/images/hamburger_icon.png";
import soc1Icon from "../assets/images/soc_1.png";
import soc2Icon from "../assets/images/soc_2.png";
import soc3Icon from "../assets/images/soc_3.png";
import nzlvgaLogo from "../assets/images/nzlvga_logo.png";
import "./Header.css";
import HamburgerMenu from './HamburgerMenu';
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    if (!window.$) {
      return;
    }
    window.$(function () {
      window.$(".sf-menu").superfish();
    });
  }, []);
  return (
    <div>
      <header className="sf-menu-fixed-xs sf-menu-fixed-sm sf-menu-fixed-md">
        <div className="container_12 logo-xs logo-sm logo-md">
          <div className="sf-menu-xs sf-menu-sm sf-menu-md display-none-lg display-none-xl">
    		<HamburgerMenu />
    	 </div>
          <nav className="display-none-xs display-none-sm display-none-md">
            <ul className="sf-menu header_menu sf-js-enabled sf-menu-xs sf-menu-sm sf-menu-md ">
              <li className="current first">
                <a href="/">
                  <img src={homeIcon} alt="" />
                  <span className="menu_first_txt">Home</span>
                  <strong></strong>
                </a>
              </li>
              <li>
                <Link to="about" className="sf-with-ul">
                  <span></span>关于NZLVGA<strong></strong>
                </Link>
              </li>

              <li>
                <Link to="/practice">
                  日常训练<strong></strong>
                </Link>
              </li>
              <li>
                <Link to="/team">
                  团队伙伴<strong></strong>
                </Link>
              </li>
              <li>
                <Link to="/location">
                  训练基地<strong></strong>
                </Link>
              </li>
              <li className="last-li">
                <Link to="/contact">
                  联系我们<strong></strong>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="social pb_0_xs pb_0_sm pb_0_md">
            <a href="https://www.youtube.com/@新西兰气排球协会-z9v">
              <img src={soc1Icon} alt="" />
            </a>
            <a href="https://www.facebook.com/share/eehx8JPY2jLiBmQf/?mibextid=LQQJ4d">
              <img src={soc2Icon} alt="" />
            </a>
            <a href="#">
              <img src={soc3Icon} alt="" />
            </a>
          </div>
          <div className="clear"></div>
        </div>
      </header>
      <div className="sf-menu-div-margin-xs sf-menu-div-margin-sm sf-menu-div-margin-md">
      </div>
    </div>
  );
};

export default Header;

