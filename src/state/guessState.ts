import { action, observable } from "mobx";
import _ from "lodash";
import { quizState } from "./quizState";
import { chanceState } from "./chanceState";
import { scoreState } from "./scoreState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string) {
    if (quizState.currentQuiz.answer.includes(letter)) {
      if (!this.correctGuess.includes(letter)) {
        this.correctGuess.push(letter);
        scoreState.addScore(20);
      }

      const answerLength = _(quizState.currentQuiz.answer)
        .uniq()
        .without(" ")
        .value().length;

      if (this.correctGuess.length === answerLength) {
        this.resetGuess();
      }
    } else {
      this.wrongGuess.push(letter);
      chanceState.decreaseChance();
    }
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
