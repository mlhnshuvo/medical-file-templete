import React from "react";
import barIcon from "../../assets/images/barIcon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import flagIcon from "../../assets/images/flagIcon.svg";
import alertIcon from "../../assets/images/alertIcon.svg";
import User from "../../assets/images/user.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={barIcon} alt="" className="header-barIcon" />
        <img src={searchIcon} alt="" className="header-searchIcon" />
      </div>
      <div className="header-right">
        <img src={flagIcon} alt="" className="header-flagIcon" />
        <img src={alertIcon} alt="" className="header-alertIcon" />
        <img src={User} alt="" className="header-userPhoto"/>
        <p className="header-activeIcon"></p>
        <p className="header-userName">Anna L Copper</p>
      </div>
    </div>
  );
};

export default Header;
