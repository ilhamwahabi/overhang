import React from "react";
import Hint from "../Hint/Hint";
import Hangman from "../Hangman/Hangman";
import Chance from "../Chance/Chance";
import Direction from "../Direction/Direction";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed pin">
      <Hint />
      <Hangman />
      <Chance />
      <Direction />
    </div>
  );
};

export default Main;
