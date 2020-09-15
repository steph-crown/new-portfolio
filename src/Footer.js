import React from 'react';
import Socials from './Socials';
import {Link} from 'react-router-dom';

function Footer() {
  return ( 
    <div className="footer">
      <div className="names">
        <h2 data-aos="fade-up">LET'S BUILD <br />SOMETHING <br /> TOGETHER. <i className="far fa-grin-alt ic"></i></h2>
        <p data-aos="fade-up">Think I might be the right friend for your next project? Take a minute, I'd love to hear about your project and your feedback! Just drop me a message below. I am currently AVAILABLE for any web design gigs.
        </p>
        <a href="mailto:emmanuelstephen024@gmail.con">
	  <button data-aos="zoom-in">Send Message</button>
	</a>
      </div>
      <div className="hr"></div>
      <div className="names center">
        <Socials />
        <small>Designed and developed by <Link to='/' className="a">Steph Crown</Link></small>
      </div>
    </div>
  )
}



export default Footer
