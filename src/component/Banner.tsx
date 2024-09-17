import React from "react";
import logo from "./logo.svg";
import "../assets/css/style.css";
import nzlvgaLogo from "../assets/images/nzlvga_logo.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="container_12">
      <div className="grid_12 ">
        <div className="wrapper">
          <h1>
            <a href="/">
              <img
                src={nzlvgaLogo}
                alt="Sports"
                className="nzlvga_logo banner_logo_responsive display-none-xs display-none-sm display-none-md"
              />
            </a>
          </h1>
          <div className="fright">
            <div className="box-1 " style={{ textAlignLast: "justify", backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
              <h2 className="h2_0 header_h2_0 banner_text0_responsive banner_pb0_responsive banner_pt0_responsive" >
                新西兰第三届星光杯
              </h2>
              <h2 className="h2_0 header_h2_1 banner_text1_responsive banner_pb1_responsive banner_pt1_responsive" >
                国际气排球邀请赛
              </h2>
<h2 className="h2_0 header_h2_1 banner_text2_responsive banner_pb2_responsive banner_pt2_responsive" >New Zealand Light Volleyball General Association</h2>
              <h2
                className="h2_0 header_h2_1 banner_text3_responsive banner_pb3_responsive banner_pt3_responsive"
              >
                奥克兰 AKL | 星光杯 2024 | 悉尼 SYD
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

