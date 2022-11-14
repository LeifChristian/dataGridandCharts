import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/navStyle.css'

export default function Nav () {
  return (
    <>
    <nav id = "hideMeAfter5Seconds" style={{ position: "fixed", top: 8, left: -40, right: 0}}>
      <ul style={{listStyle: 'none', display: 'flex', }}>
      
          <Link className="listItem" style={{flex: 1}} to="/Home">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Home</button></Link>
            
          <Link className="listItem" style={{flex: 1}} to="/Report">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Reports</button></Link>

            <Link className="listItem" style={{flex: 1}} to="/Chart">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Chart</button></Link>
            
          <Link className="listItem" style={{flex: 1}} to="/Contact">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Contact</button></Link>
            
      </ul>
    </nav>

    <Outlet />
  </>
  )

  }