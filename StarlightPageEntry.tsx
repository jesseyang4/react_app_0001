import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import { Link } from "react-router-dom";


const Footer = (props:any) => {
const {date,title,description,imageUrl,videoLink,colorVar} = props;
  return (
                <div className="box-3_pad">
                    <div className="wrapper hline2">
                        <Link to={videoLink}><img src={imageUrl} alt="" className="no_resize img1" width="240" /></Link>
                        <div className="box">
                            <p className="txt1">
                                <Link to={videoLink}><span className={`txt_date ${colorVar}`}>{date}<br /></span></Link><br />
                                <Link to={videoLink} style={{fontSize: "21px", lineHeight: "30px"}}>{title}</Link><br />
                                <br />
                                <br />
                                <p className="link2" style={{fontSize:"15px", color: "#b5b5b6"}}>{description}</p>
                            </p>
                        </div>
                    </div>
                </div>
  );
}

export default Footer;
