import React from 'react';
import profilePic from '../images/profilePic.png';

function TotalContent() {
    return (
        <div id="total_content">
        <section id="home">
          <div id="intro">
            <h1>HI!<br/> IT'S<br/> FARDIN ANAM<br/> AUNGON</h1>
            <p>I am an undergrad CS student at Bangladesh University of Engineering and Technology. Welcome to my portfolio!</p>
          </div> 
          <img id="dp" src={profilePic} alt="Display Picture" />     
        </section>
      </div>
    );
}

export default TotalContent;