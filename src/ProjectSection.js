import React from 'react';
import projectJson from "./projects.json";

import huddle1 from "./img/huddle-1.png";
import huddle2 from "./img/huddle-2.png";
import country1 from "./img/country-1.png";
import country2 from "./img/country-2.png";
import imageReactor1 from "./img/image-reactor-1.png";
import imageReactor2 from "./img/image-reactor-2.png";
import sciCalc1 from "./img/sci-calc-1.png";
import sciCalc2 from "./img/sci-calc-2.png";
import tictactoe1 from "./img/tictactoe-1.png";
import tictactoe2 from "./img/tictactoe-2.png";
import weather1 from "./img/weather-1.png";
import weather2 from "./img/weather-2.png";

const images = {
  "huddle1":huddle1,
  "huddle2":huddle2,
  "country1":country1,
  "country2":country2,
  "imageReactor1":imageReactor1,
  "imageReactor2":imageReactor2,
  "sciCalc1":sciCalc1,
  "sciCalc2":sciCalc2,
  "tictactoe1":tictactoe1,
  "tictactoe2":tictactoe2,
  "weather1":weather1,
  "weather2":weather2,
  "txt":"adek"
}


function Project(props) {
  var technologies = props.obj.technologies.map(tech => 
    <div className="tech" key={tech}>{tech}</div>
  )
  return (
    <div className="project">
      <div className="images-part">
        <div className="image"  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.image1})`}}>
  	  <h1>{props.obj.id[0]}</h1>
        </div>
        <div className="image" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${props.image2})`}} >
   	  <h1>{props.obj.id[1]}</h1>
        </div>
      </div>
      <div className="project-desc">
	<h2>{props.obj.name}</h2>
	<h4 className="year">Year <span>{props.obj.year}</span></h4>
	<div className="technologies">
	  {technologies}
	</div>  
	<p>{props.obj.desc}</p>
	<div className="buttons">
	  <a href={props.obj.githubLink}>
	    <button>View Live</button>
	  </a>
	  <a href={props.obj.liveLink}>
	    <button>View Repo</button>
	  </a>
	</div>
      </div>
    </div>
  )
}



function ProjectSection() {
  var allProjects = projectJson.map(project => 
    <Project 
      image1={images[project.imageSrc1]} 
      image2={images[project.imageSrc2]}
      key={project.name}
      obj={project}
    />
  )
  return (
    <div className="projects-area">
      <h1>Personal Projects</h1>
      {allProjects}
    </div>
  )
}

export default ProjectSection
