import React from "react";
import './VideoPage.css';
import streamImg1 from '../assets/images/stream_img1.jpeg'
import streamImg2 from '../assets/images/stream_img2.jpeg'
import streamImg3 from '../assets/images/stream_img3.jpeg'
import streamImg4 from '../assets/images/stream_img4.jpeg'
import streamImg5 from '../assets/images/stream_img5.jpeg'
import streamImg6 from '../assets/images/stream_img6.jpeg'
import streamImg7 from '../assets/images/stream_img7.jpg'

function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>直播回放间</h2>
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
              <p className="p_text_body" style={{marginTop: "20px"}}>悉尼站澳洲印象直播(二维码版): 扫描二维码即可预约、收看直播和回放</p>
              <img src={streamImg2} style={{width: "50%"}} />

              <p className="p_text_header">2024新西兰第三届星光杯国际气排球邀请赛(奥克兰站)</p>
              <p className="p_text_header_white">2024年10月4日: 女子组小组赛/半决赛/季军赛 (9:30-16:30)</p>
              <img src={streamImg3} />
              <p className="p_text_header_white" style={{marginTop: "20px"}}>2024年10月5日: 男子组小组赛/半决赛/季军赛(9:30-16:30)</p>
              <img src={streamImg4} />
              <p className="p_text_header_white" style={{marginTop: "20px"}}> 2024年10月6日: 男女冠亚军争夺赛(12:00-14:00)</p>
              <img src={streamImg5} />
              <p className="p_text_header_white" style={{marginTop: "20px"}}> 2024年10月6日: 闭幕式 (14:30-16:30)</p>
              <img src={streamImg6} />
              <p className="p_text_body" style={{marginTop: "20px"}}>闭幕式澳洲印象直播(二维码版): 扫描二维码即可预约、收看直播和回放</p>
              <img src={streamImg7} style={{width: "50%"}} />



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

