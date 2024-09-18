import "../assets/css/style.css";
import scoreImg1 from '../assets/images/score_img1.png';

function Index2Page() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>成绩公告</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_body_indent p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "50px"
              }}
            >
              <p className="p_text_header">
              参赛队伍
              </p>
              <p className="p_text_header_white">
                悉尼站 | 男队
              </p>
              <p>1. 群英龙虎</p>
              <p>2. 群英光耀 </p>
              <p>3. 群英逍遥 </p>
              <p>4. 五星荣耀</p>
              <p>5. 雄鹰队 </p>
              <p>6. 新西兰气排协会</p>
              <p>7. 喵喵猛虎队</p>
              <p>8. 西联超逸</p>
              <br />

              <p className="p_text_header_white">
                悉尼站 | 女队
              </p>
              <p>1.群英风暴</p>
              <p>2.群英蓝精灵 </p>
              <p>3.群英中大</p>
              <p>4.五星星河</p>
              <p>5.五星安德信</p>
              <p>6.引力队</p>
              <p>7.新西兰气排球协会</p>
              <p>8.北岸自在</p>
              <br />

              <p className="p_text_header_white">
                奥克兰站 | 男队
              </p>
              <p>1.澳大利亚群英</p>
              <p>2.万方精英</p>
              <p>3.万方元老</p>
              <p>4.同和取经</p>
              <p>5.同和和风</p>
              <p>6.协会联盟</p>
              <p>7.协会英雄</p>
              <p>8.TN男队</p>
              <br />

              <p className="p_text_header_white">
                奥克兰站 | 女队
              </p>
              <p>1.北京海百利</p>
              <p>2.澳大利亚群英</p>
              <p>3.澳大利亚沙拉</p>
              <p>4.万方同和</p>
              <p>5.同和诚全</p>
              <p>6.同和喜乐</p>
              <p>7.协会全红</p>
              <p>8.TN女队</p>
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

