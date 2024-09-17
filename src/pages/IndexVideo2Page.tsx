import React from "react";
import nzlvgaBanner from "../assets/images/nzlvga_banner3.jpeg";
import './VideoPage.css';

function IndexVideo2Page() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>新西兰第二届星光杯气排球锦标赛开幕式直播回放</h2>
            </div>
            <div className="box-3_pad_3 p_text_body_indent">
              <p className="p_text_header">上集：会前专访篇</p>
              <iframe
className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl"
                src="https://www.youtube.com/embed/RHpkh9jocnk?si=Rr9X4irC8d4SjtDX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <br />
              <br />
              <br />
              <p className="p_text_header">中集: 运动员入场篇</p>
              <iframe
className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl"
                src="https://www.youtube.com/embed/Do7dBLEY7pE?si=XysGI9VDv_e46lbp"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <br />
              <br />
              <br />
              <p className="p_text_header">下集: 文艺演出篇</p>
              <iframe
className="video_w_xs video_h_xs video_w_sm video_h_sm video_w_md video_h_md video_w_lg video_h_lg video_w_xl video_h_xl"
                src="https://www.youtube.com/embed/OJId_bS1U2U?si=kI1HrircJLlWsk7-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="p_text_body" style={{marginTop:"20px"}}>敬华传媒主播</p>
              <p className="p_text_body">总策划·导演：Mama-Mia</p>
              <p className="p_text_body">摄影编辑：三叔</p>
              <p className="p_text_body">导播：Mama-Mia、姜瑛</p>
              <p className="p_text_body">主持：晓嫦、Jenny</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideo2Page;

