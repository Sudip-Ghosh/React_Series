import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Login"><li>Login</li></NavLink>
    <NavLink className={(e)=>{return e.isActive?"red":""}} to="/Contact"><li>Contact</li></NavLink>
    </>
  )
}

export default NavBar