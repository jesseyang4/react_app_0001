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
              <h2>《精彩绽放》新西兰第一届星光杯气排球锦标赛回顾</h2>
            </div>
            <div
              className="box-3_pad_3 m_50_lg m_50_xl"
              style={{
                fontSize: "18px",
              }}
            >
<iframe className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl" src="https://www.youtube.com/embed/zMjmi7OvnME?si=9hmyWfpBEIXTSrRi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoPage;

