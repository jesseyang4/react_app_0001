import React from 'react';
import Slideshow from '../component/Slideshow';
import Articles from '../component/Articles';
import Sponsors from '../component/Sponsors';
import { Link } from "react-router-dom";
import StarlightPageEntry from '../component/StarlightPageEntry';
import StarlightPageOutsideEntry from '../component/StarlightPageOutsideEntry';



function Starlight1Page() {
  return (
<div className="container_12">
    <div className="grid_12">
            <div className="box-3">
<StarlightPageEntry
date="2022年11月11日"
title="《快乐气排球》新西兰第二届星光杯气排球锦标赛开幕式演出"
description="由新西兰华人妇女联合基金会模特一队倾情奉献"
imageUrl="https://img.youtube.com/vi/NZKNm7IfY1E/mqdefault.jpg"
videoLink="/indexVideo2B"
colorVar="color3"
/>
<StarlightPageEntry
date="2022年11月11日"
title="新西兰第二届星光杯 | 锦标赛开幕式"
imageUrl="https://img.youtube.com/vi/RHpkh9jocnk/mqdefault.jpg"
videoLink="/indexVideo2"
colorVar="color3"
/>
<StarlightPageOutsideEntry
date="2022年11月11日"
title="《王俊超副总领事出席第二届“星光杯”气排球赛开幕式》新西兰第二届星光杯气排球锦标赛"
articleLink="http://auckland.china-consulate.gov.cn/chn/xwdt/202211/t20221115_10975030.htm"
imageUrl="http://auckland.china-consulate.gov.cn/chn/xwdt/202211/W020221115193726734800.jpg"
colorVar="color3"
/>
        </div>
        </div>
</div>
  );
}

export default Starlight1Page;
