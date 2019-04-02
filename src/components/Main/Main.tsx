import React from "react";
import Hint from "./Hint/Hint";
import Hangman from "./Hangman/Hangman";
import Chance from "./Chance/Chance";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hint />
      <Hangman />
      <Chance />
    </div>
  );
};

export default Main;
