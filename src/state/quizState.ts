import { action, observable } from "mobx";
import _ from "lodash";

import Quiz from "../class/Quiz";
import { chanceState } from "./chanceState";
import { quiz } from "../data/quiz";

class QuizState {
  @observable
  stage: number;

  @observable
  quizzes: Quiz[];

  @observable
  currentQuiz: Quiz;

  @observable
  result: "win" | "lose" | null;

  constructor() {
    this.quizzes = this.getQuizzes();
    this.stage = 1;
    this.result = null;
    this.currentQuiz = this.quizzes[this.stage - 1];
  }

  @action
  getQuizzes() {
    return _(quiz)
      .shuffle()
      .take(5)
      .value()
      .map(({ hint, answers }) => new Quiz(hint, answers));
  }

  @action
  levelUp() {
    this.stage++;
    this.currentQuiz = this.quizzes[this.stage - 1];
  }

  @action
  reset() {
    this.quizzes = this.getQuizzes();
    this.stage = 1;
    this.result = null;
    this.currentQuiz = this.quizzes[this.stage - 1];
    chanceState.chance = 5;
  }
}

export const quizState = new QuizState();
