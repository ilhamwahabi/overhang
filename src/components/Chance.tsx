import React from "react";
import FlipMove from "react-flip-move";
import { observer } from "mobx-react-lite";

import { ReactComponent as OrangeBullet } from "../svg/bullet.svg";
import { ReactComponent as BlueBullet } from "../svg/bullet-blue.svg";

import { chanceState } from "../state/chanceState";
import { themeState } from "../state/themeState";

const Chance = () => {
  const renderBullet = () => {
    const bulletClass = "md:w-12 w-6 h-auto inline";

    return Array.from({ length: chanceState.chance }).map((_, index) => {
      switch (themeState.theme) {
        case "dark":
          return <OrangeBullet className={bulletClass} key={index} />;
        case "light":
          return <BlueBullet className={bulletClass} key={index} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className="fixed right-0 bottom-0 m-4">
      <FlipMove>{renderBullet()}</FlipMove>
    </div>
  );
};

export default observer(Chance);
