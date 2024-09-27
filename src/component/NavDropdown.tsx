import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../assets/css/style.css';
import './Nav.css';
import { useState } from 'react';

const Nav = () => {
  const location = useLocation();

  return (
    <div style={{
    position: "absolute",
    background: "black",
    width: "108px",
    zIndex: "2"}}>
      <div style={{background: "#252729"}}><Link to="/syd" style={{height: "40px",alignContent: "center", fontWeight: "initial"}}>悉尼站</Link></div>
      <div style={{background: "#252729"}}><Link to="/akl" style={{height: "60px",alignContent: "center", fontWeight: "initial"}}>奥克兰站</Link></div>
    </div>
  );
}

export default Nav;
