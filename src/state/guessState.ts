import { action, observable } from "mobx";
import { quizState } from "./quizState";

class GuessState {
  @observable
  correctGuess: string[] = [];

  @observable
  wrongGuess: string[] = [];

  @action
  addGuessedLetter(letter: string) {
    if (quizState.currentQuiz.answer.includes(letter)) {
      this.correctGuess.push(letter);
    } else {
      this.wrongGuess.push(letter);
    }
  }

  @action
  resetGuess() {
    this.correctGuess = [];
    this.wrongGuess = [];
  }
}

export const guessState = new GuessState();
