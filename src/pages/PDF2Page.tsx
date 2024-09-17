import React from "react";
import nzlvgaBanner from "../assets/images/nzlvga_banner3.jpeg";
import locationImg1 from "../assets/images/location_img1.png";
import locationImg2 from "../assets/images/location_img2.png";
import './VideoPage.css';

function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>训练基地</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
            <iframe
              src='/images/pdf2.pdf'
              width="100%"
              height="600px"
              title="PDF Viewer"
              frameBorder="0"
            >
              This browser does not support PDFs. Please download the PDF to view it: <a href="/path/to/your/file.pdf">Download PDF</a>
            </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

