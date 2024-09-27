import "../assets/css/style.css";
import "./SchedulePage.css";

function Index2Page() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>赛程安排</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_body_indent p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "50px"
              }}
            >
              <p
                style={{
                  color: "limegreen",
                  fontSize: "20px",
                  fontWeight: "bold",
                  padding: "20px 0 20px 0"
                }}
              >
               悉尼 SYDNEY ｜ 澳大利亚 AUSTRALIA
              </p>

              <p
                style={{
                  marginBottom: "20px"
                }}
              >
                <b>日期</b>： 2024年9月29日
              </p>
              <p
                style={{
                  marginBottom: "20px"
                }}
              >
                <b>时间</b>： 9:00-18: 00 (悉尼时间)
              </p>
              <p
                style={{
                  marginBottom: "50px"
                }}
              >
                <b>地址</b>:  <a href="https://maps.app.goo.gl/yL1YqBVjRMCg4ys18" target="_blank" rel="noopener noreferrer">Robyn Webster Sports Centre, Holbeach Ave, Tempe NSW 2044</a>
              </p>


              <p className="p_text_header">奥克兰 AUCKLAND ｜ 新西兰 NEW ZEALAND </p>
              

              <p className="p_text_body">
                <b>日期</b>： 2024年10月4日至6日
              </p>
              <p
                style={{
                  marginBottom: "60px"
                }}
              >
                <b>地址</b>：<a href="https://maps.app.goo.gl/Ye53hZBdbycehghS8" target="_blank" rel="noopener noreferrer">Barfoot &amp; Thompson Stadium 203 Kohimarama Road,
                Kohimarama, Auckland</a>
              </p>

              <p
              className="p_text_header_white"
                style={{
                  fontWeight: "bold", marginBottom: "20px"
                }}
              >
                决赛/闭幕式
              </p>


              
              <p>
                10月4日 &emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>9:30～16:30 &emsp;&emsp; 女子组 (小组赛/半决赛/季军赛)
              </p>
              <p style={{
                  marginBottom: "20px"
                }}>
                10月5日 &emsp;&emsp;&emsp;<span className="sch_dn_xs sch_dn_sm sch_dn_md">&emsp;&emsp; </span>9:30～16:30 &emsp;&emsp; 男子组 (小组赛/半决赛/季军赛)
              </p>


              <p
              className="p_text_header_white"
                style={{
                  fontWeight: "bold", marginBottom: "20px"
                }}
              >
                决赛
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

              <br />
              <br />
              <br />

              <p className="p_text_header" style={{textAlignLast: "right"}}>
                请留意:
                <br />
                <span style={{marginLeft: "50px"}}>新西兰于9月29日开始夏令时</span>
                <br />
                <span style={{marginLeft: "50px"}}>澳大利亚于10月6日开始夏令时</span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index2Page;

