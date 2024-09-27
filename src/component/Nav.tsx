import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import '../assets/css/style.css';
import './Nav.css';
import HomePage from '../pages/HomePage';
import Index2Page from '../pages/Index2Page';

const Nav = () => {
  const location = useLocation();
  return (
    <div className="container_12 display-none-xs display-none-sm display-none-md">
      <div className="grid_12">
        <div className="box-2 gradient_1">
          <nav className="mt0_xs  mt0_sm mt0_md" style={{ margin: "0px", float: "none" }}>
            <ul className="header_list_0 header_list_xs header_list_sm header_list_md">
              <li className={`ml1_xs ml1_sm ml1_md ${location.pathname === '/presentation' ? 'header_list_0_li_active' : ''}`}>
                <Link to="/presentation">
                  邀请赛会序<span className="over_line"></span>
                </Link>
              </li>
              <li className={location.pathname === '/akl' ? 'header_list_0_li_active' : ''}>
                <Link to="/akl">
                  奥克兰站<span className="over_line"></span>
                </Link>
              </li>
              <li className={location.pathname === '/syd' ? 'header_list_0_li_active' : ''}>
                <Link to="/syd">
                  悉尼站<span className="over_line"></span>
                </Link>
              </li>
              <li className={location.pathname === '/schedule' ? 'header_list_0_li_active' : ''}>
                <Link to="/schedule">
                  赛程安排<span className="over_line"></span>
                </Link>
              </li>
              <li className={`ml2_xs ml2_sm ml2_md ${location.pathname === '/score' ? 'header_list_0_li_active' : ''}`}>
                <Link to="/score">
                  分组成绩<span className="over_line"></span>
                </Link>
              </li>
              <li className={location.pathname === '/acknowledge' ? 'header_list_0_li_active' : ''}>
                <Link to="/acknowledge">
                  支持单位<span className="over_line"></span>
                </Link>
              </li>
              <li className={`last ${location.pathname === '/stream' ? 'header_list_0_li_active' : ''}`}>
                <Link to="/stream">
                直播间回放<span className="over_line"></span>
                </Link>
              </li>
            </ul>
            <div className="clear"></div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
