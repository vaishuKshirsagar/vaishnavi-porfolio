import React from 'react';
import Proj1 from "../../assets/Home/project1.png";
import Proj2 from "../../assets/Home/project2.png";
import Proj3 from "../../assets/Home/project3.png";
import ProjectItem from "./ProjectItem";


import './Projects.css';

function Projects(){
    return(
        <div className="projects" id="Projects">
            <div className='title'>
                <h1>My Personal Projects<span>Web based</span></h1>
            </div>
            <div className = "projectList">
                <ProjectItem name= "E-Leaning Portal" image={Proj1} />
                <ProjectItem name= "Gym Website" image={Proj2} />
                <ProjectItem name= "Online food order" image={Proj3} />
            </div>
        </div>
    );
}

export default Projects;