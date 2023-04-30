import React from "react";
import Profile from "./Profile/Profile";
import Footerimg from "./Footer/Footer";
import './Home.css';
// import Navbar from '../Navbar/Navbar'
 
export default function Home(){
    return(    
    <div className="home-container" id="Home"> 
        {/* <Navbar/> */}
        <Profile/>
        <Footerimg/>
       
    </div>
 
    );  
}
