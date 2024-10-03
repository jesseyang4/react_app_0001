import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import { Link, useLocation } from "react-router-dom";

function Footer() {
const location = useLocation();
  return (
<footer>
		  <div className="main-footer">
			<div className="container_12">
				<div className="grid_12">
				
					<div className="box-4">
						<nav>
							<ul className="sf-menu sf-js-enabled">
								<li className="current first"><a href="index.html"><img src="images/home_icon.png" alt="" /><strong></strong></a></li>
								<li><Link to="/about" className={location.pathname === '/about' ? 'header_tab_active' : ''}><span></span>关于NZLVGA<strong></strong></Link></li>
								<li><Link to="/practice" className={location.pathname === '/practice' ? 'header_tab_active' : ''}>日常训练<strong></strong></Link></li>
								<li><Link to="/team" className={location.pathname === '/team' ? 'header_tab_active' : ''}>团队伙伴<strong></strong></Link></li>
								<li><Link to="/location" className={location.pathname === '/location' ? 'header_tab_active' : ''}>训练基地<strong></strong></Link></li>
								<li className="last-li"><Link to="/contact" className={location.pathname === '/contact' ? 'header_tab_active' : ''}>联系我们<strong></strong></Link></li>
							</ul>
						</nav>
						<div className="clear"></div>
						<div className="hline3">
							<p><span className="color5">NZLVGA</span> © 2024 <a href="index-6.html">Privacy Policy</a><br></br></p>
						</div>
						
					</div>
					
				</div>
				
			</div>
		  </div>  
		</footer>
  );
}

export default Footer;
