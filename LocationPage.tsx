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
<p className="p_text_header">中区基地:</p>
<p className="p_text_body">时间: 	每周六下午16:00-18:25</p>
<p className="p_text_body" style={{marginTop:"20px"}}>地址: 	<a href="https://maps.app.goo.gl/si5dXAgQ8bYVenQS9" target="_blank" rel="noopener noreferrer">One Tree Hill College  18 Rockfield Road, Ellerslie, Auckland</a></p>
<div style={{textAlignLast:"center"}}>
<img src={locationImg1} alt="" style={{width: "350px"}} />
</div>
<p className="p_text_header">北岸基地</p>
<p className="p_text_body">时间:	每周三晚上19:00-21:00</p>
<p className="p_text_body" style={{marginTop:"20px"}}>地址: 	<a href="https://maps.app.goo.gl/cPLxKjzEniWnDDWy7" target="_blank" rel="noopener noreferrer">Albany Junion High School 19 Appleby Road, Albany, Auckland</a></p>
<div style={{textAlignLast:"center"}}>
<img src={locationImg2} alt="" style={{width: "350px"}} />
</div>
<p className="p_text_header">西区基地</p>
<p className="p_text_body">时间: 	每周六下午14:00 - 16:00</p>
<p className="p_text_body" style={{marginTop:"20px"}}>地址: 	<a href="https://maps.app.goo.gl/F5zbTWG4o12UsJsf8" target="_blank" rel="noopener noreferrer">The Y Massey Leisure Centre(YMCA Massey)
 545 Don Buck Road, Massey, Auckland</a></p>
<p className="p_text_header">东区基地</p>
<p className="p_text_body">时间:	每周一上午10点—12点; 每周五下午1点—3点; 每周六晚上6:30—8:30.
 (注：周五、周六两天是由队员自费为”星光杯”赛前增加的气排训练）
</p>
<p className="p_text_body" style={{marginTop:"20px"}}>地址:	<a href="https://maps.app.goo.gl/PEPSfcXW8jowXZEt9" target="_blank" rel="noopener noreferrer">2 Fremantle Place, Pakuranga, Auckland</a></p>
<p className="p_text_body" style={{marginTop:"20px"}}>
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

