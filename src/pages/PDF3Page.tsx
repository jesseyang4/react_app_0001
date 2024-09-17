import './VideoPage.css';
import i2a1 from '../assets/images/pdf_converted/2a-1.png';
import i2a2 from '../assets/images/pdf_converted/2a-2.png';
import i2a3 from '../assets/images/pdf_converted/2a-3.png';
import i2a4 from '../assets/images/pdf_converted/2a-4.png';
import i2a5 from '../assets/images/pdf_converted/2a-5.png';

function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>赛事规程: 奥克兰站</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
            <img src={i2a1} alt="" />
            <img src={i2a2} alt="" />
            <img src={i2a3} alt="" />
            <img src={i2a4} alt="" />
            <img src={i2a5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

