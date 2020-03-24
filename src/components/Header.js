import React from "react";
import './Header.scss'
const Header = ({ text }) =>{
  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
