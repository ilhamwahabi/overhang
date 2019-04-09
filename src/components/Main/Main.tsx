import React from "react";

import Hint from "./Hint/Hint";
import Hangman from "./Hangman/Hangman";
import KeyPress from "./KeyPress/KeyPress";
import Keyboard from "../Keyboard/Keyboard";
import { keyboardState } from "../../state/keyboardState";
import { observer } from "mobx-react-lite";

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
