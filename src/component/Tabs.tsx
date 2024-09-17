// src/Tabs.tsx
import React, { useRef, useState, MouseEvent } from 'react';
import './Tabs.css';
import { Link, useLocation } from "react-router-dom";

const Tabs: React.FC = () => {
const location = useLocation();
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (tabsWrapperRef.current) {
      setStartX(e.pageX - tabsWrapperRef.current.offsetLeft);
      setScrollLeft(tabsWrapperRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !tabsWrapperRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    tabsWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
<div className="container_12 display-none-lg display-none-xl mt10">
<div className="grid_12">
    <div className="tabs-container">
      <div
        className="tabs-wrapper"
        ref={tabsWrapperRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="tabs">
          <Link to="/presentation"><div key="0" className={`tab ${location.pathname === '/presentation' ? 'tab_active' : ''}`}>邀请赛会序</div></Link>
          <Link to="/akl"><div key="1" className={`tab ${location.pathname === '/akl' ? 'tab_active' : ''}`}>奥克兰站</div></Link>
          <Link to="/syd"><div key="2" className={`tab ${location.pathname === '/syd' ? 'tab_active' : ''}`}>悉尼站</div></Link>
          <Link to="/schedule"><div key="3" className={`tab ${location.pathname === '/schedule' ? 'tab_active' : ''}`}>赛程安排</div></Link>
          <Link to="/organizers"><div key="4" className={`tab ${location.pathname === '/organizers' ? 'tab_active' : ''}`}>主办协办</div></Link>
          <a href="/images/nzlvga_sponsor.jpeg" target="_blank" rel="noopener noreferrer"><div key="5" className="tab">赞助商</div></a>
          <Link to="/stream"><div key="6" className={`tab ${location.pathname === '/stream' ? 'tab_active' : ''}`}>直播平台</div></Link>
        </div>
      </div>
    </div>
</div>
</div>
  );
};

export default Tabs;

