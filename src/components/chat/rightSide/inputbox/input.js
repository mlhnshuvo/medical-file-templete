import React from "react";
import Camera from "../../../../assets/images/Camera.svg";
import Pin from "../../../../assets/images/pin.svg";

const input = () => {
  return (
    <div className="input">
      <div className="input-func">
        <img src={Camera} alt="" />
        <img src={Pin} alt="" />
      </div>
      <input type="text" className="input-box" />
      <p className="meg-send">Sent</p>
    </div>
  );
};

export default input;
