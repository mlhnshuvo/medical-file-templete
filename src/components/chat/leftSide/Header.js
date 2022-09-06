import React from "react";
import User from "../../../assets/images/user.png";
import leftHeaderSearchIcon from "../../../assets/images/leftHeaderSearchIcon.svg";

const header = () => {
  return (
    <div className="chatLeft-header">
      <img src={User} alt="" className="leftHeader-user" />
      <div className="chatLeft-header-input">
      <div >
        <input
          type="text"
          className="leftHeader-input"
          placeholder="Recherche"
        />
        <img
          src={leftHeaderSearchIcon}
          alt=""
          className="leftHeader-input-searcIcon"
        />
      </div>
      </div>
    </div>
  );
};

export default header;
