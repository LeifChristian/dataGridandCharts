import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/navStyle.css'
import styles from '../styles/stylesheet';

export default function Footer () {
  return (
    <>
    <nav style={{ position: "fixed", top: "90vh", left: 0, right: 0}}>
      <ul style={{listStyle: 'none', display: 'flex',}}>
      
          <Link className="footerItem" style={{flex: 1}} to="/Home">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Nice</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Report">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Careers</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Contact">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Github</button></Link>
            
          <Link className="footerItem" style={{flex: 1}} to="/Chart">
            
            <button style={{background: 'none', border: 'none', fontSize:"1rem"}}>Horizons</button></Link>
       
      </ul>
    </nav>

    <Outlet />
  </>
  )

  }