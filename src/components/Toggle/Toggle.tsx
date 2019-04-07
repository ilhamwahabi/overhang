import React from "react";
import { ReactComponent as Sun } from "../../svg/sun.svg";
import { ReactComponent as Moon } from "../../svg/moon.svg";

const Toggle = () => {
  return (
    <div className="fixed pin-t pin-r p-4">
      <Sun className="w-8 cursor-pointer mr-4" />
      <Moon className="w-8 cursor-pointer" />
    </div>
  );
};

export default Toggle;
