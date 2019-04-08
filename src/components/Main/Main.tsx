import React from "react";

import Hint from "./Hint/Hint";
import Hangman from "./Hangman/Hangman";
import KeyPress from "./KeyPress/KeyPress";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hint />
      <Hangman />
      <KeyPress />
    </div>
  );
};

export default Main;
