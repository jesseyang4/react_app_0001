import React from "react";
import nzlvgaBanner from "../assets/images/nzlvga_banner3.jpeg";

function IndexVideoPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>TEST LIVE VIDEO</h2>
            </div>
            <div
              className="box-3_pad_3"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
<iframe width="900" height="500" src="https://www.youtube.com/embed/UiwnaV7Rxyc?si=TOn_fdiBpVfYR3E9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoPage;

