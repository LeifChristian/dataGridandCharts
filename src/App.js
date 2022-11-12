import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from "./pages/reportTemplate";
import Home from "./pages/home";
import Nav from "./pages/nav";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Chart from "./components/chart.tsx";
import './styles/mainStyles.css'

const App = () => {
  return (
<BrowserRouter>
<Nav></Nav>
  <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route  path="/Report" element={<Report/>}/>
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Chart" element={<Chart/>}/>
  </Routes>
<Footer></Footer>
</BrowserRouter>

  );
}

export default App;
