import React from "react";

const Stage = () => {
  const renderStageDot = (totalStage: number) => {
    return new Array(totalStage)
      .fill(true)
      .map((el, index) => (
        <div
          className="border-orange border-2 w-4 h-4 my-4"
          style={{ borderRadius: "50%" }}
          key={index}
        />
      ));
  };

  return <div className="fixed p-l p-y mx-4">{renderStageDot(5)}</div>;
};

export default Stage;
