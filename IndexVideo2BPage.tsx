import React from "react";
import nzlvgaBanner from "../assets/images/nzlvga_banner3.jpeg";
import './VideoPage.css';

function IndexVideoPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>新西兰第二届星光杯气排球锦标赛开幕式演出</h2>
            </div>
            <div
              className="box-3_pad_3"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
<iframe className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl" src="https://www.youtube.com/embed/NZKNm7IfY1E?si=EJ1Eob_3lLaLBq_U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
<p className="p_text_body" style={{marginTop:"20px"}}>由新西兰华人妇女联合基金会模特一队倾情奉献</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoPage;

