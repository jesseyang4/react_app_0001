import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import { Link } from "react-router-dom";

function Sponsors() {
  return (
<div className="container_12">
        <div className="grid_12">
            <div className="box-3">
                <div className="gradient_1"><h2><Link to="/acknowledge">支持单位</Link></h2></div>
                <div className="box-3_pad_2">
                    <div className="wrapper hline2 v2">
                        <img src="images/page1_pic7.jpg" alt="" className="no_resize img1" />
                        <div className="box">
                            <p className="txt1">
                                <span className="color1 txt_date">20.12.2012</span><br />
                                Lorem ipsum dolor sit amet conse ctetur adip
                            </p>
                        </div>
                    </div>
                    <a href="#" className="link1">[view all]</a>
                </div>
            </div>
            </div>
</div>
  );
}

export default Sponsors;
