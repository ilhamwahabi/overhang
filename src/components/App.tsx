import React from "react";
import cx from "classnames";
import { observer } from "mobx-react-lite";

import Title from "./Title/Title";
import Toggle from "./Toggle/Toggle";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Direction from "./Direction/Direction";
import Stage from "./Stage/Stage";
import Chance from "./Chance/Chance";
import Result from "./Result/Result";
import { themeState } from "../state/themeState";
import Keyboard from "./Keyboard/Keyboard";
import { keyboardState } from "../state/keyboardState";

const App = () => {
  return (
    <div
      className={cx(
        "w-screen",
        "h-screen",
        `bg-${themeState.primary}`,
        "flex",
        "flex-col",
        "justify-center"
      )}
    >
      <Title />
      <Stage />
      <Toggle />
      <Main />
      <Result />
      <Direction />
      <Chance />
      <Footer />
      {keyboardState.isOpen && <Keyboard />}
    </div>
  );
};

export default observer(App);
