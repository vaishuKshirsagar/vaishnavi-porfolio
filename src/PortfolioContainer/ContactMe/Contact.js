import React from 'react'
import ContactMe from "../../assets/Home/contact.jpg";
import "./Contact.css";

function Contact(){
  return (
    <div className="contact" id="Contact">
        <div className="leftSide"
        style={{backgroundImage:`url(${ContactMe})`}}>
        </div>
        <div className="rightSide">
            <h1>Contact here</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name.." type="text"/>
                <label htmlFor="name">Email</label>
                <input name="email" placeholder="Enter email.." type="email"/>
                <label htmlFor="name">Message</label>
                <textarea rows="6" placeholder="Enter Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
  );
};

export default Contact