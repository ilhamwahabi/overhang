import React from "react";
import { ReactComponent as Bullet } from "../../svg/bullet.svg";

const Chance = () => {
  const renderBullet = (totalChance: number) => {
    return new Array(totalChance)
      .fill(true)
      .map((element, index) => <Bullet className="w-12 h-auto" key={index} />);
  };

  return <div className="fixed pin-r pin-b m-4">{renderBullet(5)}</div>;
};

export default Chance;
