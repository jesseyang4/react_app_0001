import React from "react";
import './VideoPage.css';
import streamImg1 from '../assets/images/stream_img1.jpg'
import streamImg3 from '../assets/images/stream_img3.jpg'
import streamImg4 from '../assets/images/stream_img4.jpg'
import streamImg5 from '../assets/images/stream_img5.jpg'
import streamImg6 from '../assets/images/stream_img6.jpg'

function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>直播间回放</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
              {/* <p className="p_text_body" style={{marginTop:"20px"}}>🚧精彩直播即将推出🎬
</p> */}
              <p className="p_text_header">2024新西兰第三届星光杯国际气排球邀请赛(澳大利亚悉尼站)</p>
              <img src={streamImg1} />

              <p className="p_text_header">2024新西兰第三届星光杯国际气排球邀请赛(奥克兰站)</p>
              <p className="p_text_header_white"><a href="https://muimp.xet.tech/s/2LuwWZ" target="_blank" rel="noopener noreferrer">女子组 (小组赛/半决赛/季军赛)</a>
              </p>
              <p className="p_text_header_white">
                10月4日
              </p>
              <p className="p_text_body">新西兰时间:&emsp;9.30-16:30</p>
<p className="p_text_body">悉尼时间:&emsp;&emsp;6.30-13:00</p>
<p className="p_text_body">北京时间:&emsp;&emsp;4:30-11:30</p>
<a href="https://muimp.xet.tech/s/2LuwWZ" target="_blank" rel="noopener noreferrer"><img src={streamImg3} /></a>
              <p className="p_text_header_white" style={{marginTop: "20px"}}>2024年10月5日: 男子组小组赛/半决赛/季军赛(9:30-16:30)</p>
              <img src={streamImg4} />
              <p className="p_text_header_white" style={{marginTop: "20px"}}> 2024年10月6日: 男女冠亚军争夺赛(12:00-14:00)</p>
              <img src={streamImg5} />
              <p className="p_text_header_white" style={{marginTop: "20px"}}> 2024年10月6日: 闭幕式 (14:30-16:30)</p>
              <img src={streamImg6} />



<p  style={{marginTop: "20px"}}>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<br />
附: 
</p>
              <p>
                <b>悉尼站赛事安排</b>： (新西兰时间)
              </p>
              <p>
                9月29日 &emsp;&emsp;&emsp;&emsp; 9:00～18:00
              </p>

              <p style={{marginTop: "50px"}}>
                <b>奥克兰站赛事安排</b>： (新西兰时间)
              </p>
              <p>
                10月4日 &emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>9:30～16:30 &emsp;&emsp; 女子组小组赛/半决赛/季军赛
              </p>
              <p>
                10月5日 &emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>9:30～16:30 &emsp;&emsp; 男子组小组赛/半决赛/季军赛
              </p>
              <p>
                10月6日	&emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>12:00～14:00&emsp;&emsp;男女冠亚军争夺赛
              </p>
              <p>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>14:30～16:30&emsp;&emsp;闭幕式
              </p>
              <p>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>18:00 &emsp;&emsp;&emsp;&emsp;&emsp; 答谢晚宴
              </p>
              <p className="p_text_header">
                请留意:
                <br />
                <span>新西兰于9月29日开始夏令时</span>
                <br />
                <span>澳大利亚于10月6日开始夏令时</span>
              </p>

              <p  style={{marginTop: "20px"}}>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

