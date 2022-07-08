import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../../images/logo.png"
export default function Navbar() {

  return (
    <>
   <div className="navbar">
   <div className="logo">
      <span>NewzBee</span>
      <img src={logo} alt="" />
    </div>
   </div>
    </>
  )
}