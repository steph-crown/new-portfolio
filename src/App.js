import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Particles from 'react-particles-js';

function App() {

  const particleOptions = {
    "particles": {
      "number": {
          "value": 150,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }

  }

  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions} />
      <Nav />
      <Home />
    </div>
  )
}
export default App;
