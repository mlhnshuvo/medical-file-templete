import React from "react";
import Header from "./Header";
import MainChatBox from "./mainChatBox";
import InputBox from "./inputbox";

const index = () => {
  return (
    <div className="rightside">
      <Header />
      <MainChatBox />
      <InputBox />
    </div>
  );
};

export default index;
