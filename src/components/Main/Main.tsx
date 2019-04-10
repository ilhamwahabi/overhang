import React from "react";

import Hint from "./Hint";
import Hangman from "./Hangman";
import KeyPress from "./KeyPress";
import Keyboard from "../Keyboard";
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
