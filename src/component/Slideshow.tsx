import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "../assets/css/style.css";
import "./Slideshow.css";
import { Link } from "react-router-dom";

const Slideshow = () => {
  const [isDocumentReady, setIsDocumentReady] = useState(
    document.readyState === "complete",
  );

  document.onreadystatechange = () => {
    setIsDocumentReady(document.readyState === "complete");
  };

  useEffect(() => {
    if (
      !window?.$("#camera_wrap")?.camera ||
      document.readyState !== "complete"
    ) {
      console.log(
        "document.readyState needs to be complete",
        document.readyState,
      );
      return;
    }
    console.log("document.readyState", document.readyState);
    window.$("#camera_wrap").camera({
      loader: false,
      pagination: false,
      thumbnails: false,
      height: "51.630434%",
      fx: "simpleFade",
      rows: "1",
      slicedCols: "1",
      slicedRows: "1",
      caption: false,
    });
  }, [isDocumentReady]);
  return (
    <div className="container_12 mt10-xs mt10-sm mt10-md">
      <div className="grid_12">
        <div className="slider_wrapper">
          <div className="" id="camera_wrap">
            <div data-src="images/nzlvga_cup_logo_1.png">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                  </span>
                  <span className="slider_txt2">
                    <Link to="/starlight1">
                    第一届星光杯
</Link>
                  </span>
                </div>
              </div>
            </div>

            <div data-src="images/nzlvga_cup_logo_2.png">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                  </span>
                  <span className="slider_txt2">
                    <Link to="/starlight2">
                    第二届星光杯
</Link>
                  </span>
                </div>
              </div>
            </div>

            <div data-src="images/nzlvga_cup_logo_3.jpg">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                  </span>
                  <span className="slider_txt2">
                    <Link to="/starlight3">
                    第三届星光杯
</Link>
                  </span>
                </div>
              </div>
            </div>



            <div data-src="https://img.youtube.com/vi/zMjmi7OvnME/mqdefault.jpg">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                    <time dateTime="2012-12-22">2021年3月-4月</time>
                  </span>
                  <span className="slider_txt2">
                    <Link to="/indexVideo">
《精彩绽放》新西兰第一届星光杯锦标赛
                    </Link>
                  </span>
                  <span className="slider_txt3">
                  主办：
                  <br />
                  新西兰华人妇女联合基金会
                  <br />
                  新西兰气排球协会总会
                    <Link to="/indexVideo" className="link1">
                      [more]
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div data-src="https://img.youtube.com/vi/a5_4oaAgzuM/maxresdefault.jpg">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                    <time dateTime="2012-12-22">2024年6月30日</time>
                  </span>
                  <span className="slider_txt2">
                    <Link to="/indexVideo3">
                      新西兰气排球协会总会《第三届星光杯新闻发布》
                    </Link>
                  </span>
                  <span className="slider_txt3">
                    Press Release...
                    <Link to="/indexVideo3" className="link1">
                      [more]
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div data-src="https://img.youtube.com/vi/6UrQhZlF9RY/maxresdefault.jpg">
              <div className="caption fadeIn">
                <div className="caption_bg">
                  <span className="slider_txt1">
                    <time dateTime="2012-12-22">2024年7月27日</time>
                  </span>
                  <span className="slider_txt2">
                    <Link to="/indexVideo3B">
                      新西兰气排球协会总会《备战第三届星光杯》
                    </Link>
                  </span>
                  <span className="slider_txt3">
                  《备战星光杯》——新西兰气排球协会总会 
                  <br />
                  七月#NEWEATS积分赛，为迎新西兰第三届
                  <br />
                  星光杯气排球国际邀请赛热身！
                    <Link to="/indexVideo3B">
                      [more]
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

