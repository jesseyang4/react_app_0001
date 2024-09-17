import React from 'react';
import Slideshow from '../component/Slideshow';
import Articles from '../component/Articles';
import Sponsors from '../component/Sponsors';
import { Link } from "react-router-dom";
import StarlightPageEntry from '../component/StarlightPageEntry';
import StarlightPageOutsideEntry from '../component/StarlightPageOutsideEntry';



function Starlight3Page() {
  return (
<div className="container_12">
    <div className="grid_12">
            <div className="box-3">
<StarlightPageEntry
date="2024年7月27日"
title="新西兰气排球协会总会《备战第三届星光杯》"
imageUrl="https://img.youtube.com/vi/6UrQhZlF9RY/mqdefault.jpg"
videoLink="/indexVideo3B"
colorVar="color4"
/>
<StarlightPageEntry
date="2024年6月30日"
title="新西兰第三届星光杯气排球邀请赛《新闻发布》"
imageUrl="https://img.youtube.com/vi/a5_4oaAgzuM/mqdefault.jpg"
videoLink="/indexVideo3"
colorVar="color4"
/>
<StarlightPageOutsideEntry
date="2023年12月5日"
title="新西兰气排球协会总会《成功举办的”新西兰协会杯公开赛”精彩闭幕》"
articleLink="https://newzealandnewspaper.co.nz/%e6%96%b0%e8%a5%bf%e5%85%b0%e6%b0%94%e6%8e%92%e7%90%83%e5%8d%8f%e4%bc%9a%e6%80%bb%e4%bc%9a%e4%b8%be%e8%a1%8c%e7%9a%84%e6%96%b0%e8%a5%bf%e5%85%b0%e5%8d%8f%e4%bc%9a%e6%9d%af%e5%85%ac%e5%bc%80%e8%b5%9b/"
colorVar="color4"
/>
<StarlightPageEntry
date="2024年7月27日"
title="新西兰气排球协会总会《备战星光杯》"
description="新西兰气排球协会总会七月NEWEATS积分赛，为迎接9月29日和10月4-6日分别在澳大利亚悉尼和新西兰奥克兰两地举办的新西兰第三届星光杯气排球国际邀请赛——热身！"
imageUrl="https://img.youtube.com/vi/6UrQhZlF9RY/mqdefault.jpg"
videoLink="/indexVideo3B"
colorVar="color4"
/>
<StarlightPageEntry
date="2024年6月30日"
title="新西兰气排球协会总会《第三届星光杯新闻发布》"
description="新西兰第三届星光杯国际气排球邀请赛《新闻发布》, 新西兰气排球协会总会会长David Xu吹响集结号！"
imageUrl="https://img.youtube.com/vi/a5_4oaAgzuM/mqdefault.jpg"
videoLink="/indexVideo3"
colorVar="color4"
/>
        </div>
        </div>
</div>
  );
}

export default Starlight3Page;
