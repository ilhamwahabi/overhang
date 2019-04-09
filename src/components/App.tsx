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
    </div>
  );
};

export default observer(App);
