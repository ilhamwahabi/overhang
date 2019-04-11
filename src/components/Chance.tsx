import React from "react";
import FlipMove from "react-flip-move";
import { observer } from "mobx-react-lite";

import { ReactComponent as OrangeBullet } from "../svg/bullet.svg";
import { ReactComponent as BlueBullet } from "../svg/bullet-blue.svg";

import { chanceState } from "../state/chanceState";
import { themeState } from "../state/themeState";

const Chance = () => {
  const renderBullet = (totalChance: number) => {
    const bulletClass = "md:w-12 w-6 h-auto";

    return Array.from({ length: totalChance }).map((element, index) => {
      switch (themeState.theme) {
        case "dark":
          return <OrangeBullet className={bulletClass} key={index} />;
        case "light":
          return <BlueBullet className={bulletClass} key={index} />;
      }
    });
  };

  return (
    <div className="fixed pin-r pin-b m-4">
      <FlipMove>{renderBullet(chanceState.chance)}</FlipMove>
    </div>
  );
};

export default observer(Chance);
