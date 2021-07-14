import React from "react";
import '../styles/index.css';
import "../styles/nav.css";



function Nav()
{
 return(
     <>
    
    <div className="Stiky">
    <nav className="Nav">
    <div className="logo">
      <h1 id="AA"><span>my</span><br/>IIT FRIENDS </h1>
    </div>

      <div className="Categories">
        <span class="Dropdown_btn">categories</span>
        <ul class="Dropdown">
          <li>Video</li>
          <li>live stream</li>
          <li>Conection</li>
          <li>Other</li>
        </ul>   
      </div>
      <span>
      <input className="Search" type="text" placeholder="Search..."/>
      <button className="Search-btn" type="search">
           s
      </button>
      </span>
      <div className="Icons">
      <a href="index.css" target="_blank" className="Notif">
      <img src="https://img.icons8.com/ios/40/000000/alarm.png"/>
      </a>
      <a href="index.css" target="_blank" className="Notif">
      <img src="https://img.icons8.com/ios-glyphs/40/000000/test-account.png"/>
      </a>
      </div>
    </nav>
    </div>
    </>
    );
}
export default Nav;