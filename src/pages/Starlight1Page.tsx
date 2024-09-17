import React from 'react';
import Slideshow from '../component/Slideshow';
import Articles from '../component/Articles';
import Sponsors from '../component/Sponsors';
import StarlightPageEntry from '../component/StarlightPageEntry';
import StarlightPageOutsideEntry from '../component/StarlightPageOutsideEntry';
import { Link } from "react-router-dom";


function Starlight1Page() {
  return (
<div>
<div className="container_12">
    <div className="grid_12">
            <div className="box-3">
                <div className="gradient_1"><h2>第一届星光杯</h2></div>
                <div className="box-3_pad">
                    <div className="wrapper hline2">
                        <Link to="/indexVideoB"><img src="https://img.youtube.com/vi/Sn60WOYo_UA/hqdefault.jpg" alt="" className="no_resize img1" width="240" /></Link>
                        <div className="box">
                            <p className="txt1">
                                <Link to="/indexVideoB"><span className="color2 txt_date">2021年4月24日<br /></span></Link><br />
                                <Link to="/indexVideoB" style={{fontSize: "21px"}}>《气排球操》新西兰第一届星光杯气排球锦标赛闭幕式演出</Link><br />
                                <br />
                                <br />
                                <p className="link2" style={{fontSize:"15px", color: "#b5b5b6"}}>由新西兰华人妇女联合基金会模特一队倾情奉献</p>
                            </p>
                        </div>
                    </div>

                    <div className="wrapper hline2">
                        <Link to="/indexVideo"><img src="https://img.youtube.com/vi/zMjmi7OvnME/mqdefault.jpg" alt="" className="no_resize img1" width="240" /></Link>
                        <div className="box">
                            <p className="txt1">
                                <Link to="/indexVideo"><span className="color2 txt_date">2021年3月-4月<br /></span></Link><br />
                                <Link to="/indexVideo" style={{fontSize: "21px"}}>《精彩绽放》新西兰第一届星光杯锦标赛</Link><br />
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>

                    <div className="wrapper hline2">
                        <div className="box">
                            <p className="txt1">
                                <a href="https://www.meipian.cn/3hg4geav?share_depth=2&s_uid=21488523&share_to=group_singlemessage&first_share_to=singlemessage&first_share_uid=41713200" target="_blank" rel="noopener noreferrer"><span className="color2 txt_date">2021年3月20日<br /></span></a><br />
                                <a href="https://www.meipian.cn/3hg4geav?share_depth=2&s_uid=21488523&share_to=group_singlemessage&first_share_to=singlemessage&first_share_uid=41713200" style={{fontSize: "21px"}} target="_blank" rel="noopener noreferrer">《女队赛况》新西兰第一届星光杯气排球锦标赛</a><br />
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>

<StarlightPageOutsideEntry 
date="2021年3月27日"
title="《混合队赛况》新西兰第一届星光杯气排球锦标赛"
articleLink="https://www.meipian.cn/3hxnyq7o?share_depth=2&s_uid=21488523&share_to=group_singlemessage&first_share_to=singlemessage&first_share_uid=41713200"
colorVar="color2"
/>
<StarlightPageOutsideEntry 
date="2021年4月24日"
title="新西兰总理及工党团队发文:”恭祝新西兰首届气排球锦标赛闭幕式圆满成功！”新西兰第一届星光杯气排球锦标赛"
articleLink="https://newzealandnewspaper.co.nz/%e6%96%b0%e8%a5%bf%e5%85%b0%e6%80%bb%e7%90%86%e5%8f%8a%e5%b7%a5%e5%85%9a%e5%9b%a2%e9%98%9f%e5%8f%91%e6%96%87%e6%81%ad%e7%a5%9d%e6%96%b0%e8%a5%bf%e5%85%b0%e9%a6%96%e5%b1%8a%e6%b0%94%e6%8e%92/?from=timeline"
colorVar="color2"
/>
<StarlightPageEntry 
date="2021年4月11日"
title="《半决赛之3、4名争夺赛》新西兰第一届星光杯气排球锦标赛"
imageUrl="https://img.youtube.com/vi/j37wr_ZD_w0/mqdefault.jpg"
videoLink="/video/1d5"
colorVar="color2"
/>

<StarlightPageEntry 
date="2021年3月15日"
title="《开赛》新西兰第一届星光杯气排球锦标赛"
imageUrl="https://img.youtube.com/vi/xdBKtRWgnh8/mqdefault.jpg"
videoLink="/video/1d4"
colorVar="color2"
/>
<StarlightPageEntry 
date="2021年3月21日"
title="中文频道33新西兰《33来客啦》第五十五期 |  主办方专访专题《气排球和排球什么区别？》新西兰第一届星光杯气排球锦标赛"
imageUrl="https://img.youtube.com/vi/T4PXft195XU/mqdefault.jpg"
videoLink="/video/1d3"
colorVar="color2"
/>
<StarlightPageOutsideEntry 
date="2021年2月26日"
title="《启动仪式圆满落幕》新西兰第一届星光杯气排球锦标赛"
articleLink="https://www.meipian.cn/3fxhyyvl?share_depth=6&s_uid=21488523&share_to=group_singlemessage&first_share_to=singlemessage&first_share_uid=41713200"
colorVar="color2"
/>
<StarlightPageEntry 
date="2021年2月26日"
title="《启动仪式》新西兰第一届星光杯气排球锦标赛"
imageUrl="https://img.youtube.com/vi/salOZAZqLm0/mqdefault.jpg"
videoLink="/video/1d1"
colorVar="color2"
/>
                </div>
            </div>
        </div>
        </div>
</div>
  );
}

export default Starlight1Page;
