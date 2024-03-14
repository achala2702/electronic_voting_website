import React from 'react'
import "./header.css"
import logo from "../../components/assets/Logo.png"

const Header = () => {
  return (
    <div className="header">
      <div><img id="logo_img" src= {logo} alt="LOGO"/></div>
            <h1 id="heading">Election Results</h1>
    </div>
  )
}

export default Header