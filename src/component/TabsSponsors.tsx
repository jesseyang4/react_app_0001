// src/Tabs.tsx
import React, { useRef, useState, MouseEvent } from 'react';
import './Tabs.css';
import { Link, useLocation } from "react-router-dom";
import TabsSponsorImageContainer from './TabsSponsorImageContainer';
import s1_1 from '../assets/images/sponsor_logo/s1_1.png';
import s1_2 from '../assets/images/sponsor_logo/s1_2.jpg';
import s1_3 from '../assets/images/sponsor_logo/s1_3_a_2_1.jpg';
import s2_1 from '../assets/images/sponsor_logo/s1_3_a_2_1.jpg';
import s2_2 from '../assets/images/sponsor_logo/s2_2.jpeg';
import s3_1 from '../assets/images/sponsor_logo/s3_1.jpeg';
import s3_2 from '../assets/images/sponsor_logo/s3_2.png';
import s3_3 from '../assets/images/sponsor_logo/s3_3.jpg';
import s3_4 from '../assets/images/sponsor_logo/s3_4.png';
import s4_1 from '../assets/images/sponsor_logo/s4_1.png';
import s4_2 from '../assets/images/sponsor_logo/s4_2.png';
import s4b_1 from '../assets/images/sponsor_logo/s4b_1.png';
import s5_1a from '../assets/images/sponsor_logo/s5_1a.jpg';
import s5_1 from '../assets/images/sponsor_logo/s5_1.jpg';
import s5_2 from '../assets/images/sponsor_logo/s5_2.jpg';
import s5_3 from '../assets/images/sponsor_logo/s5_3.jpeg';
import s5_4 from '../assets/images/sponsor_logo/s5_4.jpg';
import s5_5 from '../assets/images/sponsor_logo/s5_5.jpg';
import s5_6 from '../assets/images/sponsor_logo/s5_6.jpeg';
import s5_7 from '../assets/images/sponsor_logo/s5_7.jpg';
import s6_1 from '../assets/images/sponsor_logo/s6_1.jpg';
import s7_1 from '../assets/images/sponsor_logo/s7_1.jpg';
import s7_2 from '../assets/images/sponsor_logo/s7_2.png';
import s7_3 from '../assets/images/sponsor_logo/s7_3.jpg';
import s7_4 from '../assets/images/sponsor_logo/s7_4.jpeg';
import s7_5 from '../assets/images/sponsor_logo/s7_5.jpeg';
import s7_6 from '../assets/images/sponsor_logo/s7_6.jpg';
import s7_7 from '../assets/images/sponsor_logo/s7_7.png';
import s7_8 from '../assets/images/sponsor_logo/s7_8.jpg';
import s7_9 from '../assets/images/sponsor_logo/s7_9.png';
import s7_10 from '../assets/images/sponsor_logo/s7_10.png';
import s8_1 from '../assets/images/sponsor_logo/s8_1.jpg';
import s8_2 from '../assets/images/sponsor_logo/s8_2_a_8_3.jpg';
import s8_3 from '../assets/images/sponsor_logo/s8_2_a_8_3.jpg';
import s8_4 from '../assets/images/sponsor_logo/s8_4.jpg';
import s8_5 from '../assets/images/sponsor_logo/s8_5.jpg';
import s8_6 from '../assets/images/sponsor_logo/s8_6.jpeg';
import s8_7 from '../assets/images/sponsor_logo/s8_7.jpg';
import s8_7b from '../assets/images/sponsor_logo/s8_7b.png';
import s8_8 from '../assets/images/sponsor_logo/s8_8.jpeg';
import s8_9 from '../assets/images/sponsor_logo/s8_9.jpeg';
import s8_10 from '../assets/images/sponsor_logo/s8_10.jpg';
import s8_11 from '../assets/images/sponsor_logo/s8_11.png';
import s8_12 from '../assets/images/sponsor_logo/s8_12.jpeg';
import s8_13 from '../assets/images/sponsor_logo/s8_13.jpg';
import s8_14 from '../assets/images/sponsor_logo/s8_14.jpg';
import s8_15 from '../assets/images/sponsor_logo/s8_15.jpg';
import s8_16 from '../assets/images/sponsor_logo/s8_16.jpg';
import s8_17 from '../assets/images/sponsor_logo/s8_17.jpg';
import s8_18 from '../assets/images/sponsor_logo/s8_18.jpg';
import s8_19 from '../assets/images/sponsor_logo/s8_19.jpeg';
import s8_20 from '../assets/images/sponsor_logo/s8_20.jpeg';
import s8_21 from '../assets/images/sponsor_logo/s8_21.jpg';
import s8_22 from '../assets/images/sponsor_logo/s8_22.png';
import s8_23 from '../assets/images/sponsor_logo/s8_23.png';
import s8_24 from '../assets/images/sponsor_logo/s8_24.jpg';
import s8_25 from '../assets/images/sponsor_logo/s8_25.jpg';
import s8_26 from '../assets/images/sponsor_logo/s8_26.jpg';
import s8_27 from '../assets/images/sponsor_logo/s8_27.jpg';
import s9_1 from '../assets/images/sponsor_logo/s9_1.jpg';
import s9_2 from '../assets/images/sponsor_logo/s9_2.jpg';
import s9_3 from '../assets/images/sponsor_logo/s9_3.jpeg';
import s9_4 from '../assets/images/sponsor_logo/s9_4.png';
import s9_4b from '../assets/images/sponsor_logo/s9_4b.png';
import s9_5 from '../assets/images/sponsor_logo/s9_5.png';
import s9_6 from '../assets/images/sponsor_logo/s9_6.jpg';
import s9_7 from '../assets/images/sponsor_logo/s9_7.jpg';
import s9_8 from '../assets/images/sponsor_logo/s9_8.png';
import s9_9 from '../assets/images/sponsor_logo/s9_9.jpg';
import s9_10 from '../assets/images/sponsor_logo/s9_10.jpg';
import s9_11 from '../assets/images/sponsor_logo/s9_11.jpg';
import s9_13 from '../assets/images/sponsor_logo/s9_13.jpg';

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
<div className="container_12 mt10">
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
          <TabsSponsorImageContainer imagePath={s1_3} />
          <TabsSponsorImageContainer imagePath={s1_1} />
          <TabsSponsorImageContainer imagePath={s1_2} />
          <TabsSponsorImageContainer imagePath={s2_2} />
          <TabsSponsorImageContainer imagePath={s4b_1} />
          <TabsSponsorImageContainer imagePath={s3_1} />
          <TabsSponsorImageContainer imagePath={s3_2} />
          <TabsSponsorImageContainer imagePath={s3_3} />
          <TabsSponsorImageContainer imagePath={s3_4} />
          <TabsSponsorImageContainer imagePath={s4_1} />
          <TabsSponsorImageContainer imagePath={s4_2} />
          <TabsSponsorImageContainer imagePath={s5_1a} />
          <TabsSponsorImageContainer imagePath={s5_1} />
          <TabsSponsorImageContainer imagePath={s5_2} />
          <TabsSponsorImageContainer imagePath={s5_3} />
          <TabsSponsorImageContainer imagePath={s5_4} />
          <TabsSponsorImageContainer imagePath={s5_5} />
          <TabsSponsorImageContainer imagePath={s5_6} />
          <TabsSponsorImageContainer imagePath={s5_7} />
          <TabsSponsorImageContainer imagePath={s6_1} />
          <TabsSponsorImageContainer imagePath={s7_1} />
          <TabsSponsorImageContainer imagePath={s7_2} />
          <TabsSponsorImageContainer imagePath={s7_3} />
          <TabsSponsorImageContainer imagePath={s7_4} />
          <TabsSponsorImageContainer imagePath={s7_5} />
          <TabsSponsorImageContainer imagePath={s7_6} />
          <TabsSponsorImageContainer imagePath={s7_7} />
          <TabsSponsorImageContainer imagePath={s7_8} />
          <TabsSponsorImageContainer imagePath={s7_9} />
          <TabsSponsorImageContainer imagePath={s7_10} />
          <TabsSponsorImageContainer imagePath={s8_1} />
          <TabsSponsorImageContainer imagePath={s8_2} />
          <TabsSponsorImageContainer imagePath={s8_4} />
          <TabsSponsorImageContainer imagePath={s8_5} />
          <TabsSponsorImageContainer imagePath={s8_6} />
          <TabsSponsorImageContainer imagePath={s8_7} />
          <TabsSponsorImageContainer imagePath={s8_7b} />
          <TabsSponsorImageContainer imagePath={s8_8} />
          <TabsSponsorImageContainer imagePath={s8_9} />
          <TabsSponsorImageContainer imagePath={s8_10} />
          <TabsSponsorImageContainer imagePath={s8_11} />
          <TabsSponsorImageContainer imagePath={s8_12} />
          <TabsSponsorImageContainer imagePath={s8_13} />
          <TabsSponsorImageContainer imagePath={s8_14} />
          <TabsSponsorImageContainer imagePath={s8_15} />
          <TabsSponsorImageContainer imagePath={s8_16} />
          <TabsSponsorImageContainer imagePath={s8_17} />
          <TabsSponsorImageContainer imagePath={s8_18} />
          <TabsSponsorImageContainer imagePath={s8_19} />
          <TabsSponsorImageContainer imagePath={s8_20} />
          <TabsSponsorImageContainer imagePath={s8_21} />
          <TabsSponsorImageContainer imagePath={s8_22} />
          <TabsSponsorImageContainer imagePath={s8_23} />
          <TabsSponsorImageContainer imagePath={s8_24} />
          <TabsSponsorImageContainer imagePath={s8_25} />
          <TabsSponsorImageContainer imagePath={s8_26} />
          <TabsSponsorImageContainer imagePath={s8_27} />
          <TabsSponsorImageContainer imagePath={s9_1} />
          <TabsSponsorImageContainer imagePath={s9_2} />
          <TabsSponsorImageContainer imagePath={s9_3} />
          <TabsSponsorImageContainer imagePath={s9_4} />
          <TabsSponsorImageContainer imagePath={s9_4b} />
          <TabsSponsorImageContainer imagePath={s9_5} />
          <TabsSponsorImageContainer imagePath={s9_6} />
          <TabsSponsorImageContainer imagePath={s9_7} />
          <TabsSponsorImageContainer imagePath={s9_8} />
          <TabsSponsorImageContainer imagePath={s9_9} />
          <TabsSponsorImageContainer imagePath={s9_10} />
          <TabsSponsorImageContainer imagePath={s9_11} />
          <TabsSponsorImageContainer imagePath={s9_13} />
        </div>
      </div>
    </div>
</div>
</div>
  );
};

export default Tabs;

