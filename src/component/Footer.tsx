import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
<footer>
		  <div className="main-footer">
			<div className="container_12">
				<div className="grid_12">
				
					<div className="box-4">
						<nav>
							<ul className="sf-menu sf-js-enabled">
								<li className="current first"><a href="index.html"><img src="images/home_icon.png" alt="" /><strong></strong></a></li>
								<li><Link to="/about"><span></span>关于NZLVGA<strong></strong></Link></li>
								<li><Link to="/practice">日常训练<strong></strong></Link></li>
								<li><Link to="/team">团队伙伴<strong></strong></Link></li>
								<li><Link to="/location">训练基地<strong></strong></Link></li>
								<li className="last-li"><Link to="/contact">联系我们<strong></strong></Link></li>
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
