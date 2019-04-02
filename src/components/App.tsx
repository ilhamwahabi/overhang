import React from "react";
import "./App.css";
import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Hint from "./Hint/Hint";
import Main from "./Main/Main";
import Direction from "./Direction/Direction";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Title />
      <Toggle />
      <Hint />
      <Main />
      <Direction />
      <Footer />
    </div>
  );
};

export default App;
