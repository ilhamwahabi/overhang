import React from "react";
import { ReactComponent as Sun } from "../../svg/sun.svg";
import { ReactComponent as Moon } from "../../svg/moon.svg";

const Toggle = () => {
  return (
    <div className="fixed pin-t pin-r flex flex-col p-4">
      <Sun className="w-8 h-auto mb-4 cursor-pointer" />
      <Moon className="w-8 h-auto cursor-pointer" />
    </div>
  );
};

export default Toggle;
