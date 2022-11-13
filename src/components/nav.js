import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/navStyle.css'

export default function Nav () {
  return (
    <>
    <nav id = "hideMeAfter5Seconds" style={{ position: "fixed", width: '100%', top: 8, left: 0, right: 0}}>
      <ul style={{listStyle: 'none', display: 'flex', marginLeft: '20%', marginRight: '20%', top: 0, left: 0, right: 0}}>
      
          <Link className="listItem" style={{flex: 1}} to="/Home">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Home</button></Link>
            
          <Link className="listItem" style={{flex: 1}} to="/Report">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Reports</button></Link>

            <Link className="listItem" style={{flex: 1}} to="/Chart">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Chart</button></Link>
            
          <Link className="listItem" style={{flex: 1}} to="/Contact">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Contact</button></Link>
            
          
       
      </ul>
    </nav>

    <Outlet />
  </>
  )

  }