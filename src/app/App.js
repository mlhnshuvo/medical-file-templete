import React from "react";
import Helmet from "./Helmet";
import Header from "../components/header/Header";
import ChatHeader from "../components/chat";

const App = () => {
  return (
    <div>
      <Helmet />
      <Header />
      <ChatHeader />
    </div>
  );
};

export default App;
