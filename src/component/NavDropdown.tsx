import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import '../assets/css/style.css';
import './Nav.css';

const Nav = () => {
  const location = useLocation();
  return (
    <div className="container_12 display-none-xs display-none-sm display-none-md">
    </div>
  );
}

export default Nav;
