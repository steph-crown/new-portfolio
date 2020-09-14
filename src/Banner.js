import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <div className="hi">
	<p>HI THERE </p>
        <span role="img" className="emoji" aria-label="Wave">👋🏻</span>
      </div>

      <div className="name">
	<h2>MEET STEPHEN <br /> EMMANUEL</h2>
      </div>

      <div className="me">
	<p>I am a web developer (fullstack) and UI/UX designer based in Lagos, Nigeria with experience in developing beautifully designs for websites and web applications and implementing those designs for corporate and personal purposes.</p>
      </div>

      <div className="learn-more">
	<p>Learn more <a href="#">about me</a> or jump straight to <a href="#">my work</a></p>
      </div>
    </div>
  )
}

export default Banner
