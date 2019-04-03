import React from "react";
import { ReactComponent as Bullet } from "../../svg/bullet.svg";
import { chanceState } from "../../state/chanceState";

const Chance = () => {
  const renderBullet = (totalChance: number) => {
    return new Array(totalChance)
      .fill(true)
      .map((element, index) => <Bullet className="w-12 h-auto" key={index} />);
  };

  return (
    <div className="fixed pin-r pin-b m-4">
      {renderBullet(chanceState.chance)}
    </div>
  );
};

export default Chance;
