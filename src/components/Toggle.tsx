import React from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as Sun } from "../svg/sun.svg";
import { ReactComponent as Moon } from "../svg/moon.svg";
import { themeState } from "../state/themeState";

const Toggle = () => {
  const renderToggle = () => {
    const toggleButtonClass = "w-8 cursor-pointer";

    switch (themeState.theme) {
      case "light":
        return (
          <Sun
            className={toggleButtonClass}
            onClick={themeState.changeTheme.bind(themeState, "dark")}
          />
        );
      case "dark":
        return (
          <Moon
            className={toggleButtonClass}
            onClick={themeState.changeTheme.bind(themeState, "light")}
          />
        );
      default:
        return null;
    }
  };

  return <div className="fixed top-0 right-0 p-4">{renderToggle()}</div>;
};

export default observer(Toggle);
