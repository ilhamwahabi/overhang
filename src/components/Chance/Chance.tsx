import React from "react";
import FlipMove from "react-flip-move";
import { observer } from "mobx-react-lite";

import { ReactComponent as Bullet } from "../../svg/bullet.svg";
import { chanceState } from "../../state/chanceState";

const Chance = () => {
  const renderBullet = (totalChance: number) => {
    return Array.from({ length: totalChance }).map((element, index) => (
      <Bullet className="w-12 h-auto" key={index} />
    ));
  };

  return (
    <div className="fixed pin-r pin-b m-4">
      <FlipMove>{renderBullet(chanceState.chance)}</FlipMove>
    </div>
  );
};

export default observer(Chance);
