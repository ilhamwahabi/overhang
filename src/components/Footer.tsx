import React from "react";
import { observer } from "mobx-react-lite";
import cx from "classnames";

import { themeState } from "../state/themeState";

const Footer = () => {
  return (
    <div
      className={cx(
        "p-5",
        "fixed",
        "pin-b",
        "pin-l",
        "text-center",
        `text-${themeState.secondary}`
      )}
    >
      Made by Ilham Wahabi
    </div>
  );
};

export default observer(Footer);
