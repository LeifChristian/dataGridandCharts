import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/navStyle.css'
import styles from '../styles/stylesheet';

export default function Footer () {
  return (
    <>
    <nav style={{ position: "fixed", width: '100%', top: 590, left: 0, right: 0}}>
      <ul style={{listStyle: 'none', display: 'flex', marginLeft: '20%', marginRight: '20%', top: 0, left: 0, right: 0}}>
      
          <Link className="footerItem" id='ass' style={{flex: 1}} to="/Home">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Testimonials</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Report">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Careers</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Contact">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Github</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Chart">
            
            <button style={{background: 'none', border: 'none', fontSize:"20px"}}>Horizons</button></Link>
       
      </ul>
    </nav>

    <Outlet />
  </>
  )

  }