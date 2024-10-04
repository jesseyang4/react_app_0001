import React from 'react';
import Slideshow from '../component/Slideshow';
import Articles from '../component/Articles';
import Sponsors from '../component/Sponsors';
import DailyLive from "../component/DailyLive";

function HomePage() {
  return (
<div>
<Slideshow />
<DailyLive />
<Articles />
</div>
  );
}

export default HomePage;
