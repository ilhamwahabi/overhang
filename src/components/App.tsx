import React from "react";
import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Score from "./Score/Score";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center">
      <Title />
      <Toggle />
      <Score />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
