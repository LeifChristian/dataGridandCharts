import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../styles/navStyle.css'
import styles from '../styles/stylesheet';

export default function Footer () {
  return (
    <>
     <nav style={{ position: 'fixed',width: '100%',  bottom: 0, textAlign: 'center'}}>
      <ul style={{listStyle: 'none', display: 'flex', marginLeft: '20%', marginRight: '20%'}}>
        <li className="footerItem" style={{flex: 1, fontSize:"20px"}}>
          <Link to="/Home">Email</Link>
        </li>
        <li className="footerItem" style={{flex: 1, fontSize:"20px"}}>
          <Link to="/Report">Careers</Link>
        </li>
        <li className="footerItem" style={{flex: 1, fontSize:"20px"}}>
          <Link to="/contact">Affiliates</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )

  }