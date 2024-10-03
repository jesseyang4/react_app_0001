import "../assets/css/style.css";
import "./ScorePage.css"
import scoreImg1 from '../assets/images/score_img1.png';
import s1 from '../assets/images/scorepage/1.jpeg';
import s2 from '../assets/images/scorepage/2.jpeg';
import s3 from '../assets/images/scorepage/3.jpeg';
import s4 from '../assets/images/scorepage/4.png';
import s5_1 from '../assets/images/scorepage/5.1.jpg';
import s5_2 from '../assets/images/scorepage/5.2.jpg';
import s6_1 from '../assets/images/scorepage/6.1.jpg';
import s6_2 from '../assets/images/scorepage/6.2.jpg';
import Collapsible from '../component/Collapsible';

function Index2Page() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>分组成绩</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight m_50_lg m_50_xl"
              style={{
                fontSize: "18px",
              }}
            >
              <p className="p_text_header">
              参赛队伍
              </p>
<Collapsible title="悉尼站分组与比赛次序:">
              <img src={s1} style={{marginTop: "20px", width: "100%"}} className="sc_pos_xs sc_pos_sm sc_pos_md sc_pos_lg sc_ml_xl sc_mw_xl" />
              <img src={s2} style={{marginTop: "20px"}} />
              <img src={s3} style={{marginTop: "20px"}} />
</Collapsible>
              <br />

<Collapsible title="奥克兰站分组与比赛次序:">
              <img src={s4} style={{marginTop: "20px"}} />
              <img src={s5_1} style={{marginTop: "20px"}} />
              <img src={s5_2} style={{marginTop: "20px"}} />
              <img src={s6_1} style={{marginTop: "20px"}} />
              <img src={s6_2} style={{marginTop: "20px"}} />
</Collapsible>
              <br />

              <p className="p_text_header">
              对阵代码表
              </p>

<img src={scoreImg1} alt="" />

              <p className="p_text_header">
                <b>分组与成绩</b>: 待抽签和比赛结束后登记
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index2Page;

