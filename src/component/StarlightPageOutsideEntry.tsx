import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';


const Footer = (props:any) => {
const {date,title,description,imageUrl,articleLink,colorVar} = props;
  return (
                <div className="box-3_pad">
                    <div className="wrapper hline2">
                        <a href={articleLink} target="_blank" rel="noopener noreferrer"><img src={imageUrl} alt="" className="no_resize img1" width="240" /></a>
                        <div className="box">
                            <p className="txt1">
                                <a href={articleLink} target="_blank" rel="noopener noreferrer"><span className={`${colorVar} txt_date`}>{date}<br /></span></a><br />
                                <a href={articleLink} style={{fontSize: "21px", lineHeight: "30px"}} target="_blank" rel="noopener noreferrer">{title}</a><br />
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
