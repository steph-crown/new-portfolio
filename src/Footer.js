import React from 'react';
import Socials from './Socials';

function Footer() {
  return ( 
    <div className="footer">
      <div className="names">
        <h2>LET'S BUILD <br />SOMETHING <br /> TOGETHER. <i className="far fa-grin-alt ic"></i></h2>
        <p>Think I might be the right friend for your next project? Take a minute, I'd love to hear about your project and your feedback! Just drop me a message below. I am currently AVAILABLE for any web design gigs.
        </p>
        <button>Send Message</button>
      </div>
      <div className="hr"></div>
      <div className="names center">
        <Socials />
        <small>Designed and developed by <a href="#">Steph Crown</a></small>
      </div>
    </div>
  )
}



export default Footer
