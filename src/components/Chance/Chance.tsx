import React from "react";
import { ReactComponent as Bullet } from "../../svg/bullet.svg";
import { chanceState } from "../../state/chanceState";
import { guessState } from "../../state/guessState";
import { observer } from "mobx-react";

const Chance = () => {
  const renderBullet = (totalChance: number) => {
    return Array.from({ length: totalChance }).map((element, index) => (
      <Bullet className="w-12 h-auto" key={index} />
    ));
  };

  return (
    <div className="fixed pin-r pin-b m-4">
      {renderBullet(chanceState.chance)}
    </div>
  );
};

export default observer(Chance);
