import { action, observable } from "mobx";

class GuessState {
  @observable
  guess: string[] = [];

  @action
  addGuess(newGuess: string) {
    this.guess.push(newGuess);
  }

  @action
  resetGuess() {
    this.guess = [];
  }
}
