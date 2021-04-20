import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
let menuOpen = false;
hamburger.addEventListener("click", () => {
    /* following is for hamburger animation */
    if(!menuOpen) {
        hamburger.classList.add('open');
        menuOpen = true;
    } else {
        hamburger.classList.remove('open');
        menuOpen = false;
    }
    /* following is for menu options to pop up */
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});