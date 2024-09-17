import './VideoPage.css';
import './PDFPage.css';

import i2s1 from '../assets/images/pdf_converted/2s-1.png';
import i2s2 from '../assets/images/pdf_converted/2s-2.png';
import i2s3 from '../assets/images/pdf_converted/2s-3.png';
import i2s4 from '../assets/images/pdf_converted/2s-4.png';


function IndexVideoBPage() {
  return (
    <div className="container_12">
      <div className="grid_12">
        <div className="grid_12 alpha">
          <div className="box-3">
            <div className="gradient_1">
              <h2>赛事规程: 悉尼站</h2>
            </div>
            <div
              className="box-3_pad_3 p_text_lineheight"
              style={{
                fontSize: "18px",
                textIndent: "Video0px",
              }}
            >
<img src={i2s1} alt="" />
<img src={i2s2} alt="" />
<img src={i2s3} alt="" />
<img src={i2s4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexVideoBPage;

