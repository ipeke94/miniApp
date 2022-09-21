import React from 'react';
import Icons from "./Icons";
import ShiftIcons from "./ShiftIcons";

const Footer = () => {
  return (
    <div className="sidebar-footer">
    <span className="sidebar-footer-name">Shift 2</span>
    <Icons/>
    <button className="shift-btn">End Shift</button>
    <ShiftIcons/>
  </div>
  )
}

export default Footer;