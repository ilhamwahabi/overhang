import React from "react";
import cx from "classnames";
import { observer } from "mobx-react-lite";

import { ReactComponent as DownArrow } from "../../svg/arrow.svg";
import { themeState } from "../../state/themeState";
import { keyboardState } from "../../state/keyboardState";

const Direction = () => {
  function openKeyboard() {
    keyboardState.toggle();
  }

  return keyboardState.isOpen ? null : (
    <div className="flex flex-col items-center justify-center fixed pin-b pin-x mb-4">
      <p className={cx("mb-4", `text-${themeState.secondary}`)}>
        Open Virtual Keyboard
      </p>
      <DownArrow
        onClick={openKeyboard}
        className={cx(
          "w-6",
          "h-auto",
          "cursor-pointer",
          `arrow-${themeState.tertiary}`
        )}
      />
    </div>
  );
};

export default observer(Direction);
