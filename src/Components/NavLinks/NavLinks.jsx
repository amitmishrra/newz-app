import React from 'react'
import "./Navlink.css"
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  return (
    <>
    <div className="navlinks">
        
                <NavLink  className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/general">General</NavLink>  
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/business">Business</NavLink>
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/entertainment">Entertainment</NavLink>
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/technology">Technology</NavLink>       
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/health">Health</NavLink>
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/science">Science</NavLink>
                <NavLink className={({ isActive }) => 'menu_item ' + (isActive ? 'active_item' : '')} to="/sports">Sports</NavLink>   
    </div>
    </>
  )
}
