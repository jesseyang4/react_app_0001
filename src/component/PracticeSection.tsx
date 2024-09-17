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

const Header = (props: any) => {
const {description, date, title, embedUri} = props;
  return (
<div>
            <div className="box-3_pad_3 p_text_body_indent p_text_lineheight">
              <p className="p_text_header">{title}</p>
              <p className="p_text_subheader p_text_header_white">{date}</p>
<p className="p_text_body p_text_body_ml">
{description}
</p>
              <iframe
className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl"
                src={`https://www.youtube.com/embed/${embedUri}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <br />
              <br />
              <br />


            </div>
</div>
  );
};

export default Header;

