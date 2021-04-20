import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <div class="hamburger">
            <div class="menu-btn_burger"></div>
          </div> 
          <ul class="nav-links">
            <li>
              <a href="#">
                <HomeIcon class="nav_icons"/>
                <span class="pageName">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <WorkIcon class="nav_icons"/>
                <span class="pageName">Works</span>
              </a>
            </li>
            <li>
              <a href="#">
                <PermMediaIcon class="nav_icons"/>
                <span class="pageName">Gallery</span>
              </a>
            </li>
            <li>
              <a href="#">
                <InfoIcon class="nav_icons"/>
                <span class="pageName">About</span>  
              </a>
            </li>
            <li>
              <a href="#">
                <PermContactCalendarIcon class="nav_icons"/>
                <span class="pageName">Contact Me</span> 
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;