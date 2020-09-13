import React from 'react';
import {Link} from 'react-router-dom';


class  Nav extends React.Component {

  constructor(props) {
    super(props)

    this.initial = 
      (
        <nav>
          <div className="logo">
            <h4>S<span></span>E</h4>
          </div>

          <div className="menu" onClick={()=>{this.handleClick()}} >
            <div></div><div></div><div></div>
          </div>
        </nav>
       )
    this.navDisp = 
      (
	<div className="display">
	  <b className="x" onClick={()=>{this.handleClick()}}>&times;</b>
	  <Link 
	    className="a" 
	    to="/" onClick={()=>{this.handleClick()}}>
	    <h1>Home</h1>
	  </Link>
	  <Link
            className="a"
            to="/about" onClick={()=>{this.handleClick()}}>              
	    <h1>About</h1> 
	  </Link>
	  <Link
            className="a"
            to="/project" onClick={()=>{this.handleClick()}}>                       
	    <h1>Projects</h1>          
	  </Link>
	  <Link
            className="a"
            to="/connect" onClick={()=>{this.handleClick()}}>                         
	    <h1>Connect</h1>     
	  </Link>
	</div>
      )
    this.state = {
      displayed: this.initial
    }
  }

  /*componentDidMount() {
    this.rootNode.click = ()=>{this.handleClick}
  }*/

  handleClick = () => {
    this.setState({displayed: this.state.displayed === this.initial ? this.navDisp : this.initial});
  }

  render () {
    return (
      <div>{this.state.displayed}</div>
    )
  }
}


export default Nav
