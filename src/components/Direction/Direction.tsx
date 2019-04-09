import React from "react";
import cx from "classnames";

import { ReactComponent as DownArrow } from "../../svg/arrow.svg";
import { themeState } from "../../state/themeState";

const Direction = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed pin-b pin-x mb-4">
      <p className={cx("mb-4", `text-${themeState.secondary}`)}>
        Open Virtual Keyboard
      </p>
      <DownArrow className="w-6 h-auto cursor-pointer" />
    </div>
  );
};

export default Direction;
