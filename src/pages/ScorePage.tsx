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
              className="box-3_pad_3 p_text_body_indent p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "50px"
              }}
            >
              <p className="p_header">女子组小组赛成绩</p>
              <p className="p_subheader">小组A</p>
              <p className="p_white">1 &emsp;同和星来</p>
              <p className="p_white">2 &emsp;万方同和</p>
              <p className="p_white">3 &emsp;澳大利亚群英</p>
              <p className="p_white">4 &emsp;协会全红</p>
              <br />
              <p><span className="p_white">群英</span> vs 全红 21:15 21:8</p>
              <p><span className="p_white">方同</span> vs 星来 15:21 21:14 12:15</p>
              <p><span className="p_white">星来</span> vs 群英 21:17 21:8</p>
              <p><span className="p_white">方同</span> vs 全红 21:5 21:16</p>
              <p>群英 vs <span className="p_white">方同</span> 8:21 17:21</p>
              <p>全红 vs <span className="p_white">星来</span> 13:21 12:21</p>
              <br />
              <p className="p_subheader">小组B</p>
              <p className="p_white">1 &emsp;澳大利亚沙拉</p>
              <p className="p_white">2 &emsp;同和诚全</p>
              <p className="p_white">3 &emsp;北京海百利</p>
              <p className="p_white">* &emsp;TN女队</p>
              <br />
              <p><span className="p_white">海百利</span> vs TN&emsp;15:21 21:14 21:14</p>
              <p><span className="p_white">沙拉</span> vs 诚全 &emsp;21:14 21:10</p>
              <p><span className="p_white">诚全</span> vs 海百利 21:16 21:19</p>
              <p><span className="p_white">沙拉</span> vs TN&emsp;&emsp;21:9 21:8</p>
              <p>海百利 vs <span className="p_white">沙拉</span> 15:21 13:21</p>
              <p>TN vs <span className="p_white">诚全</span>&emsp;&emsp;18:21 18:21</p>
              <br />

              <p className="p_header">女子组半决赛成绩</p>
              <p className="p_white">(决赛) 同和星来</p>
              <p className="p_white">(决赛) 澳大利亚沙拉</p>
              <br />
              <p><span className="p_white">星来</span> vs 诚全 &emsp;18:21 21:14 15:2</p>
              <p><span className="p_white">沙拉</span> vs 方同 &emsp;21:14 21:8</p>
              <p><span className="p_white">群英</span> vs TN&emsp;&emsp;21:18 21:19</p>
              <p><span className="p_white">海百利</span> vs 全红 21:11 21:11</p>
              <br />

              <p className="p_header">女子组3-8名决赛</p>
              <p className="p_white">3. 万方同和</p>
              <p className="p_white">4. 同和诚全</p>
              <p className="p_white">5. 北京海百利</p>
              <p className="p_white">6. 澳大利亚群英</p>
              <p className="p_white">7. 协会全红</p>
              <p className="p_white">*  TN女队</p>
              <br />
              <p>诚全 vs <span className="p_white">方同</span> &emsp;21:17 18:21 8:15</p>
              <p>群英 vs <span className="p_white">海百利</span> 19:21 19:21</p>
              <p><span className="p_white">TN</span> vs 全红&emsp;&emsp;21:18 21:16</p>
              <br />

              <p className="p_text_header">
              参赛队伍
              </p>
              <p className="p_text_header_white">
              悉尼站分组与比赛次序: 
              </p>
              <img src={s1} style={{marginTop: "20px", width: "100%"}} className="sc_pos_xs sc_pos_sm sc_pos_md sc_pos_lg sc_ml_xl sc_mw_xl" />
              <img src={s2} style={{marginTop: "20px"}} />
              <img src={s3} style={{marginTop: "20px"}} />
              <br />

              <p className="p_text_header_white"  style={{marginTop: "20px"}} >
              奥克兰站分组与比赛次序: 
              </p>
              <img src={s4} style={{marginTop: "20px"}} />
              <img src={s5_1} style={{marginTop: "20px"}} />
              <img src={s5_2} style={{marginTop: "20px"}} />
              <img src={s6_1} style={{marginTop: "20px"}} />
              <img src={s6_2} style={{marginTop: "20px"}} />
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

