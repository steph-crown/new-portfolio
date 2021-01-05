import React from 'react';
import projectJson from "./projects.json";

function Project(props) {
  var technologies = props.obj.technologies.map(tech => 
    <div className="tech" key={tech}>{tech}</div>
  )
  return (
    <div className="project">
      <div className="images-part">
        <div 
	  className="image"  
	  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.image1})`}}
	  data-aos="fade-down"
	>
  	  <h1>{props.obj.id[0]}</h1>
        </div>
        <div 
	  className="image" 
	  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${props.image2})`}} 
	  data-aos="fade-up"
	>
   	  <h1>{props.obj.id[1]}</h1>
        </div>
      </div>
      <div className="project-desc">
	<h2 data-aos="fade-up">{props.obj.name}</h2>
	<h4 className="year" data-aos="fade-up">Year <span>{props.obj.year}</span></h4>
	<div className="technologies" data-aos="fade-up">
	  {technologies}
	</div>  
	<p data-aos="fade-up">{props.obj.desc}</p>
	<div className="buttons">
	  <a href={props.obj.githubLink} data-aos="flip-left">
	    <button>View Git</button>
	  </a>
	  <a href={props.obj.liveLink} data-aos="flip-right">
	    <button>View Live</button>
	  </a>
	</div>
      </div>	
    </div>
  )
}



function ProjectSection() {
  var allProjects = projectJson.map(project => 
    <Project 
      image1={project.imageSrc1} 
      image2={project.imageSrc2}
      key={project.name}
      obj={project}
    />
  )
  return (
    <>
      <div className="projects-area" data-aos="fade-up">
        <h1>Projects</h1>
        {allProjects}
      </div>
    </>
  )
}
 
export default ProjectSection
