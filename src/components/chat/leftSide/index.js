import React from "react";
import Header from "./Header";
import SelectBtn from "./SelectBtn";
import AllUser from "./AllUser";

const index = () => {
  return (
    <div className="chatLeft">
      <Header />
      <p className="chatLeft-border-bottom"></p>
      <SelectBtn />
      <AllUser />
    </div>
  );
};

export default index;
