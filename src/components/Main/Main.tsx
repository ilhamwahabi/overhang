import React from "react";
import Hint from "./Hint/Hint";
import Hangman from "./Hangman/Hangman";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hint />
      <Hangman />
    </div>
  );
};

export default Main;
