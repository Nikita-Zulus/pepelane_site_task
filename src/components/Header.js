import React from "react";
import logo from "../images/logo.svg";
import crescent from "../images/night-mode.svg";
import points from "../images/points.svg";
import bell from "../images/bell.svg";
import userPic from "../images/userPic.svg";

export function Header() {
    return (
     <div className="header">
        <div className="header__leftside">
          <div className="logo">
            <img src={logo} alt="logo" className="logo__image"/>
            <p className="logo__description">World's first affordable airsharing</p>
          </div> 
        </div> 
        <div className="header__rightside"> 
          <div className="nightmode">
            <img className="nightmode__image" src={crescent} alt="night-mode"/>
            <p className="nightmode__description">Night mod</p>
          </div> 
          <div className="controlls"> 
            <img src={points} alt="points-menu" className="controlls__pointsmenu"/>
            <img src={bell} alt="bell" className="controlls__bell"/>
          </div> 
          <div className="user"> 
            <div className="user__name">Bessie Cooper</div>
            <img src={userPic} alt="user-pic" className="user__pic"/>
          </div> 
        </div>   
      </div>
    )
}