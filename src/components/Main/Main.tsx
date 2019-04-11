import React from "react";
import { observer } from "mobx-react-lite";

import Hint from "./Hint";
import Hangman from "./Hangman";
import KeyPress from "./KeyPress";
import Keyboard from "../Keyboard";
import { keyboardState } from "../../state/keyboardState";

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hint />
      <Hangman />
      <KeyPress />
      {keyboardState.isOpen && <Keyboard />}
    </div>
  );
};

export default observer(Main);
