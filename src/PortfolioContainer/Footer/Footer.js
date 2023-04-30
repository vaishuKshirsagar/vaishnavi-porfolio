import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sb-footer">
        <div className="sb-footer-main">
        <div className="sb-footer-link">
        <h4>About Me</h4>
        <p>Web designer</p>
        <p>Web developer</p>
        <p>Software developer</p>
        </div>
      <div className="sb-footer-link">
        <h4>Contact</h4>
        <p>
        <i className= "fa fa-phone-square"> +91 8956802469</i>
        </p>
        <p>
        <i className= "fa fa-envelope-square"> vaishnavikshirsagar1607@gmail.com</i> 
        </p>
      </div>
      <div className="sb-footer-link">
        <h4>Location</h4>
        <p>
        <i className= "fa fa-map-marker "></i> Rajrajeshwari Girsl Hostel, Pimpri, Pune
        </p>
        
      </div>
      <div className="sb-footer-link">
      <h4>Connect here</h4>
      <div className="social-media">
            <a href='https://www.facebook.com/profile.php?id=100084000117025'>
              <i className= "fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/vaishuKshirsagar">
              <i className= "fa fa-github-square"></i>
            </a>
            <a href='https://www.instagram.com/itsvaishnavi_16/'>
              <i className= "fa fa-instagram"></i>
            </a>
            <a href='https://www.linkedin.com/in/vaishnavi-kshirsagar-636461228/'>
              <i className= "fa fa-linkedin-square"></i>
            </a>
            <a href='https://twitter.com/VaishnaviKshi18'>
              <i className= "fa fa-twitter"></i>
            </a>
            </div>
      </div>
      </div>
    </div>
  
    </div>
    
    
  );
}

export default Footer;