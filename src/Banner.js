import React from 'react';
import {Link} from "react-router-dom"

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.text = "iDesign • iCode • iSolve"
    this.state = {text:"", index:0}
  }
  componentDidMount() {
    this.timerID = setInterval( () => {this.animateText()}, 400)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  animateText = () => {
      if (this.state.index === 23) {
      setTimeout(() => {
	this.setState({index:0})
      },2000)
    }
    this.setState({
      index:this.state.index + 1,
      text:this.text.slice(0,this.state.index)
    })
  }
  render() {
    return (
      <div className="banner">
        <div className="hi">
     	  <p>HI THERE </p>
          <span role="img" className="emoji" aria-label="Wave">👋🏻</span>
        </div>

        <div className="name">
    	  <h2>MEET STEPHEN <br /> EMMANUEL</h2>
        </div>

        <div className="anime-text">
	  <small>{this.state.text}</small>
	  <i class="fa fa-i-cursor" aria-hidden="true"></i>
	</div>

        <div className="me">
	  <p data-aos='fade-up'>I am a web developer (fullstack) and UI/UX designer based in Lagos, Nigeria with experience in developing beautifully designs for websites and web applications and implementing those designs for corporate and personal purposes.</p>
        </div>

        <div className="learn-more" data-aos='fade-up'>
  	  <p>Learn more <Link className="a" to="/about">about me</Link> or jump straight to <Link className="a" to="/project">my work</Link></p>
        </div>
      </div>
    )
  }
}

export default Banner
