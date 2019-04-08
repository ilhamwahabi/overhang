import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import { quizState } from "../../state/quizState";
import Anime from "react-anime";

const Result = () => {
  const youText = useRef(null);
  const resultText = useRef(null);

  const renderResult = (result: "win" | "lose" | null) => {
    let resultComponent;
    switch (result) {
      case "win":
        resultComponent = (
          <span className="text-8xl text-blue inline-block" ref={resultText}>
            WIN
          </span>
        );
      case "lose":
        resultComponent = (
          <span className="text-8xl text-red inline-block" ref={resultText}>
            LOSE
          </span>
        );
    }

    return (
      <Anime
        easing="easeOutElastic"
        duration={750}
        direction="normal"
        delay={350}
        translateY={["100vh", "0"]}
      >
        {resultComponent}
      </Anime>
    );
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
          <Anime
            easing="easeOutElastic"
            duration={750}
            direction="normal"
            translateY={["-100vh", "0"]}
          >
            <span className="text-8xl inline-block" ref={youText}>
              YOU
            </span>
          </Anime>{" "}
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
