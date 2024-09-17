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
              <h2>新西兰气排球协会总会《备战第三届星光杯》</h2>
            </div>
            <div
              className="box-3_pad_3"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
<iframe className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl" src="https://www.youtube.com/embed/6UrQhZlF9RY?si=nuw3UfTYEQpwiHqX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoPage;

