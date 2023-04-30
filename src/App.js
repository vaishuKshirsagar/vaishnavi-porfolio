import "./App.css";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React, {useState} from 'react';
import Home from './PortfolioContainer/Home/Home';
import Navbar from './PortfolioContainer/Navbar/Navbar';
import About from "./PortfolioContainer/AboutMe/About";
import Projects from "./PortfolioContainer/Projects/Projects";
import Contact from "./PortfolioContainer/ContactMe/Contact";
import Footer from "./PortfolioContainer/Footer/Footer";
import Services from "./PortfolioContainer/Services/Services";
// import {
//   BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
    <div className="App">
          <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Services/>
          <Contact/>
          <Footer/>
          <div id="backbtn" onClick={scrollToTop}>
            <i className= "fa fa-arrow-up"> </i></div>
          </div>
    </>
  );
}

export default App;
