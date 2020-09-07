import careerJson from './career.json';
import React from 'react';

function CareerEach(props) {
  return(
    <div className="career-sn">
      <h4>{props.careerObj.company}</h4>
      <div className="career-detail">
	<div className="line-circle">
	  <div className="circle">
            <div className="inner"></div>
	    <div className="outer"></div>
	  </div>
	  <div className="line"></div>
        </div>
	<div className="career-desc">
	  <p>{props.careerObj.role}</p>
	  <p><b>{props.careerObj.locate}</b></p>
	  <p>{props.careerObj.period}</p>
	</div>
      </div>
    </div>
  )
}


function Career() {
  var careerMarkup = careerJson.map(career  =>
    <CareerEach careerObj={career} key={career.role} />
  )
  return (
    <section>
      <div className="flex">
	<h1>Career</h1>
	<h1><a href="">Get My CV</a></h1>
      </div>
      <div className="careers">
        {careerMarkup}
      </div>
    </section>
  )
}


export default Career
