import React from 'react';
import './Services.css';

function Services(){
    return(
        <div className="services" id="Services">
        <div className="service component__space" >
        <div className="heading">
            <h1 className="heading">My Services</h1>
            <p className="heading p__color">
            I'm always excited to take on new and challenging projects. 
            </p>
            <p className="heading p__color">
            From custom websites to mobile apps, I've helped clients achieve their goals and grow their businesses online.
            </p>
        </div>
        <div className='service-container'>
        <div className="container">
                <div className="row">

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">SEO</h1>
                                <p className="p service__text p__color">
                                I offer range of SEO services designed to improve website's search engine rankings,attract more traffic to your site.</p>
                            </div>
                         </div>
                    </div>

                    
                    <div className="col__3">
                         <div className="service__box pointer">
                         <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Web development</h1>
                                <p className="p service__text p__color">
                                Whether you need a simple landing page or a complex ecommerce site, I have the skills and expertise to bring your vision to life. 
                                </p>
                            </div>
                         </div>
                    </div>

                    
                    <div className="col__3">
                         <div className="service__box pointer">
                         <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Mob App develoment</h1>
                                <p className="p service__text p__color">
                                I'm skilled in programming languages such as Java and Swift,up-to-date with the latest technologies. 
                                </p>
                            </div>
                         </div>
                    </div>

                </div>
                </div>
            </div>      
        </div>
        </div>
    );
}

export default Services;