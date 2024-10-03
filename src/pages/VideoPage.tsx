import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import './VideoPage.css';
import { Link } from "react-router-dom";


const Footer = (props:any) => {
const {title,embedSrc} = props;
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>{title}</h2>
            </div>
            <div
              className="box-3_pad_3 m_50_lg m_50_xl"
              style={{
                fontSize: "18px",
              }}
            >
<iframe className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl" src={embedSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
