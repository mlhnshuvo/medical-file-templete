import React from "react";
import List from "@mui/material/List";
import HomeIcon from "../../assets/images/home.svg";
import UserSvg from "../../assets/images/userSvg.svg";

const HeaderItem = () => {
  return (
    <>
      <List>
        <div className="header-sidebar-item margintop">
          <img src={HomeIcon} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Tableau de bord</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
      <List>
        <div className="header-sidebar-item">
          <img src={UserSvg} className="header-homeIcon" alt="Home" />
          <p className="header-home-text">Mes patients</p>
        </div>
      </List>
    </>
  );
};

export default HeaderItem;
