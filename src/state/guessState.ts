import { action, observable } from "mobx";
import _ from "lodash";
import { quizState } from "./quizState";
import { chanceState } from "./chanceState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string): "levelup" | "lose" | "" {
    if (quizState.currentQuiz.answer.includes(letter)) {
      if (!this.correctGuess.includes(letter)) {
        this.correctGuess.push(letter);
      }

      const answerLength = _(quizState.currentQuiz.answer)
        .uniq()
        .without(" ")
        .value().length;

      if (this.correctGuess.length === answerLength) {
        setTimeout(() => {
          this.resetGuess();
        }, 1000);
        return "levelup";
      }
    } else {
      this.wrongGuess.push(letter);

      if (chanceState.chance === 1) {
        setTimeout(() => {
          quizState.result = "lose";
        }, 500);
        chanceState.decreaseChance();
        return "lose";
      }
      if (chanceState.chance > 0) chanceState.decreaseChance();
    }
    return "";
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];

    if (quizState.stage < 5) quizState.levelUp();
    else if (quizState.stage === 5) quizState.result = "win";
  }
}

export const guessState = new GuessState();
