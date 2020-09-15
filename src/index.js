import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  "duration":"700",
  "anchor-placement":"top-bottom",
  "easing":"ease-in-cubic"
});
AOS.refresh();
AOS.refreshHard();



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
