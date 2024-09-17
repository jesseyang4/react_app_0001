import React from "react";
import logo from "./logo.svg";
import './assets/css/style.css';
import './App.css';
import Header from "./component/Header";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Tabs from "./component/Tabs";
import Slideshow from "./component/Slideshow";
import Articles from "./component/Articles";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LocationPage from "./pages/LocationPage";
import TeamPage from "./pages/TeamPage";
import PracticePage from "./pages/PracticePage";
import HomePage from "./pages/HomePage";
import Index2Page from "./pages/Index2Page";
import Index3Page from "./pages/Index3Page";
import Index4Page from "./pages/Index4Page";
import Index5Page from "./pages/Index5Page";
import IndexVideoPage from "./pages/IndexVideoPage";
import IndexVideoBPage from "./pages/IndexVideoBPage";
import IndexVideo2Page from "./pages/IndexVideo2Page";
import IndexVideo2BPage from "./pages/IndexVideo2BPage";
import IndexVideo3Page from "./pages/IndexVideo3Page";
import IndexVideo3BPage from "./pages/IndexVideo3BPage";
import IndexVideoLivePage from "./pages/IndexVideoLivePage";
import Starlight1Page from "./pages/Starlight1Page";
import Starlight2Page from "./pages/Starlight2Page";
import Starlight3Page from "./pages/Starlight3Page";
import VideoPage from "./pages/VideoPage";

declare global {
  interface Window {
    $: any;
    jQuery?: any;
  }
}


function App() {
  return (
    <div>
      <Router>
      <Header />
      <Banner />
<Nav />
<Tabs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/schedule" element={<Index2Page />} />
          <Route path="/syd" element={<Index3Page />} />
          <Route path="/akl" element={<Index3Page />} />
          <Route path="/stream" element={<Index4Page />} />
          <Route path="/organizers" element={<Index5Page />} />
          <Route path="/indexVideo" element={<IndexVideoPage />} />
          <Route path="/indexVideoB" element={<IndexVideoBPage />} />
          <Route path="/indexVideo2" element={<IndexVideo2Page />} />
          <Route path="/indexVideo2B" element={<IndexVideo2BPage />} />
          <Route path="/indexVideo3" element={<IndexVideo3Page />} />
          <Route path="/indexVideo3B" element={<IndexVideo3BPage />} />
          <Route path="/indexVideoLive" element={<IndexVideoLivePage />} />
          <Route path="/starlight1" element={<Starlight1Page/>} />
          <Route path="/starlight2" element={<Starlight2Page/>} />
          <Route path="/starlight3" element={<Starlight3Page/>} />
            <Route
              key="1d5"
              path={`/video/1d1`}
              element={<VideoPage embedSrc="https://www.youtube.com/embed/salOZAZqLm0?si=xAdtbi5pK0g131K6" title="《启动仪式》新西兰第一届星光杯气排球锦标赛" />}
            />
            <Route
              key="1d5"
              path={`/video/1d3`}
              element={<VideoPage embedSrc="https://www.youtube.com/embed/T4PXft195XU?si=dBZcObC9Qr8Xrvc4" title="中文频道33新西兰《33来客啦》第五十五期 |  主办方专访专题《气排球和排球什么区别？》新西兰第一届星光杯气排球锦标赛" />}
            />
            <Route
              key="1d5"
              path={`/video/1d4`}
              element={<VideoPage embedSrc="https://www.youtube.com/embed/xdBKtRWgnh8?si=cVilx65eKV_I66jc" title="《开赛》新西兰第一届星光杯气排球锦标赛" />}
            />
            <Route
              key="1d5"
              path={`/video/1d5`}
              element={<VideoPage embedSrc="https://www.youtube.com/embed/j37wr_ZD_w0?si=zH9BOCBmzQ3yc_fl" title="《半决赛之3、4名争夺赛》新西兰第一届星光杯气排球锦标赛" />}
            />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

