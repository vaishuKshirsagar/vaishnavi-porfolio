import React from 'react';
import ReactJs,{Fragment, useState} from 'react';
import './About.css';

const About = () => {
  const [toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
       <section className="about" id="About">
          <div className="row">
            <div className="column">
              <div className="about-img"></div>
            </div>
            <div className="column">
            <div className="tabs">
              <div className={toggleTab === 1 ? "single-tab active-tab":"single-tab"}
              onClick={() => toggleState(1)}>
                <h2>About</h2>
              </div>
              <div  className={toggleTab === 2 ? "single-tab active-tab":"single-tab"}
              onClick={() => toggleState(2)}>
                <h2>Skills</h2>
              </div>
            </div>
            <div className="tab-content">
              {/*About content*/}
              <div className={toggleTab === 1 ? "content active-content": "content"}>
                <h2>My Story</h2>
                <p>Hello and welcome to my portfolio! My name is Vaishnavi, and I am a passionate computer engineering student with a deep interest in programming languages and development. I have experience working with languages such as C, C++, Java, Python and developing applications that solve complex problems. </p>
                <h3>I am Web Designer and Developer </h3>
                <p>Throughout my academic journey, I have had the opportunity to work on various projects. These experiences have sharpened my skills in problem-solving, critical thinking, and effective communication.
                  Thank you for taking the time to view my portfolio. If you have any questions or would like to connect, please don't hesitate to reach out.</p>
                              </div>
              {/* Skills content */}
              <div className={toggleTab === 2 ? "content active-content": "content"}>
                <h2>skills</h2>
                <p>Strong skills of creating user interactive web applications along with the database management , Problem solving skills using programming languages such java, C++, Python</p>
                <div classNamr="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Html, css, Javascript</h3>
                      <div className="progress">
                        <div className="progress-bar Htmlcss">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>React js, Node JS</h3>
                      <div className="progress">
                        <div className="progress-bar Javascript">
                          <span>80%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>Java, Swift</h3>
                      <div className="progress">
                        <div className="progress-bar Php">
                          <span>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3>C++, Python</h3>
                      <div className="progress">
                        <div className="progress-bar Reactjs">
                          <span>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            </div>
          </div>
       </section>
    </Fragment>
  )
}

export default About