import React from "react";
import { ReactComponent as DownArrow } from "../../svg/arrow.svg";

const Direction = () => {
  return (
    <div className="flex flex-col items-center justify-center fixed pin-b pin-x mb-4">
      <p className="mb-4">Open Virtual Keyboard</p>
      <DownArrow className="w-8 h-auto cursor-pointer arrow-down" />
    </div>
  );
};

export default Direction;
