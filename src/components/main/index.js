import React from "react";
import TopTitle from "./TopTitle";
import MainLeft from "./mainLeft";
import MainRight from "./mainRight";

const index = () => {
  return (
    <div className="main-section">
      <TopTitle />
      <div className="main-left-right">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
};

export default index;
