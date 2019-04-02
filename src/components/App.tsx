import React from "react";
import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Score from "./Score/Score";
import Direction from "./Direction/Direction";
import Stage from "./Stage/Stage";
import Chance from "./Chance/Chance";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center">
      <Title />
      <Stage />
      <Toggle />
      <Score />
      <Main />
      <Direction />
      <Chance />
      <Footer />
    </div>
  );
};

export default App;
