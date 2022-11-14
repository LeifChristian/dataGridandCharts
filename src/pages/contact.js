import React from 'react'
import Nav from '../components/nav'
import styles from '../styles/stylesheet.js';
import { useEffect } from 'react';

const linkStyle = {
color: 'white',
fontSize: '1.1rem',
textDecoration: 'none'
}

export default function Contact () {
  return (

<div style ={{textAlign: 'center', marginTop: "14%", color: 'white'}}>
<h2>Leif Christian</h2>

  <p>Thanks for viewing my app!</p>
  <a style={linkStyle} href="tel:+014065390742">406.539.0742</a> <br/>
  <a style={linkStyle}href="mailto:leifachristian@gmail.com">Email</a> <br/>
  <a style={linkStyle} href="http://linkedin.com/in/leifchristian" target="_blank">LinkedIn</a> <br/>
  <a style={linkStyle} href="http://github.com/LeifChristian" target="_blank">Github</a>
  </div>
)

  }
