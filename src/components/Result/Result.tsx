import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { quizState } from "../../state/quizState";

const Result = () => {
  const youText = useRef(null);
  const resultText = useRef(null);

  const renderResult = (result: "win" | "lose" | null) => {
    switch (result) {
      case "win":
        return (
          <span className="text-8xl text-blue" ref={resultText}>
            WIN
          </span>
        );
      case "lose":
        return (
          <span className="text-8xl text-red" ref={resultText}>
            LOSE
          </span>
        );
    }
  };

  return (
    quizState.result && (
      <>
        <div
          className="fixed z-20"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none"
          }}
        >
          <span className="text-8xl" ref={youText}>
            YOU
          </span>{" "}
          {renderResult(quizState.result)}
        </div>
        <div
          className="fixed w-screen h-screen bg-grey-darkest opacity-75 z-10"
          onClick={() => quizState.reset()}
        />
      </>
    )
  );
};

export default observer(Result);
