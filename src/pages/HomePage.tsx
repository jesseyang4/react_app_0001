import React from 'react';
import Slideshow from '../component/Slideshow';
import Articles from '../component/Articles';
import Sponsors from '../component/Sponsors';
import DailyLive from "../component/DailyLive";
import DailyLive2 from "../component/DailyLive2";

function HomePage() {
  return (
<div>
<Slideshow />
<DailyLive />
<DailyLive2 />
<Articles />
</div>
  );
}

export default HomePage;
