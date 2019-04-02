import React from "react";
import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Score from "./Score/Score";
import Direction from "./Direction/Direction";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center">
      <Title />
      <Toggle />
      <Score />
      <Main />
      <Direction />
      <Footer />
    </div>
  );
};

export default App;
