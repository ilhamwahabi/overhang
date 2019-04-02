import React from "react";
import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Hint from "./Hint/Hint";
import Main from "./Main/Main";
import Direction from "./Direction/Direction";
import Footer from "./Footer/Footer";
import Score from "./Score/Score";
import Chance from "./Chance/Chance";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <Title />
      <Toggle />
      <Score />
      <Hint />
      <Main />
      <Chance />
      <Direction />
      <Footer />
    </div>
  );
};

export default App;
