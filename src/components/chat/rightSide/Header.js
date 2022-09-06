import React from "react";
import User from "../../../assets/images/user.png";
import mainRightSearch from "../../../assets/images/mainRightSearch.svg";
import optionBar from "../../../assets/images/optionBar.svg";

const Header = () => {
  return (
    <div className="chatRight">
      <div className="chatRight-content">
        <div className="chatRightLeft">
          <img src={User} alt="" className="chatRight-header-user" />
          <div>
            <p className="chatRight-header-user-name">Antoine Nevra</p>
            <p className="chatRight-header-user-title">En ligne</p>
          </div>
        </div>
        <div className="chatRightRight">
          <img src={mainRightSearch} alt="" className="chatRight-searchIcon" />
          <img src={optionBar} alt="" className="chatRight-barIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
