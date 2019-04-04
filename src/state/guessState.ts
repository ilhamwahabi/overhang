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
  addGuessedLetter(letter: string) {
    if (quizState.currentQuiz.answer.includes(letter)) {
      this.correctGuess.push(letter);

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
    quizState.levelUp();
  }
}

export const guessState = new GuessState();
