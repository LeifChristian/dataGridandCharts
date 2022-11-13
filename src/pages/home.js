import React from 'react'
import Nav from '../components/nav'
import styles from '../styles/stylesheet.js'
import Grid from './dataGrid'
import '../App.css'

export default function Home () {
  return (

<div style ={{textAlign: 'center', marginTop: "8%", color: 'white'}}>

<h1>Welcome!</h1>

<p style={{ width: "50%", textAlign: 'center', marginLeft: "auto", marginRight: 'auto'}}>
  Here is a data rendering template using postgres, Sequelize, node.js and React.
  Utilizing Devextreme datagrid and Chart.js. Enjoy!
  </p>


<div className="homeLink">
  Find me on Github: <a  href="http://github.com/LeifChristian" target="_blank">http://github.com/LeifChristian</a></div>

  {/* <a href="http://github.com/LeifChristian" target="_blank">Github</a> */}
  </div>

  )

  }