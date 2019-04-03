import { action, observable } from "mobx";
import _ from "lodash";
import Quiz from "../class/Quiz";

class QuizState {
  @observable
  stage: number;

  @observable
  quizzes: Quiz[];

  @observable
  currentQuiz: Quiz;

  constructor() {
    this.quizzes = this.getQuizzes();
    this.stage = 0;
    this.currentQuiz = this.quizzes[this.stage];
  }

  @action
  getQuizzes() {
    return _.shuffle([
      new Quiz("Javascript framework", ["React", "Angular", "Vue"]),
      new Quiz("React core team", ["Dan Abramov"]),
      new Quiz("CSS framework", ["Bootstrap", "Bulma", "Foundation"]),
      new Quiz("Web browser", ["Brave", "Chrome"]),
      new Quiz("Code hosting platform", ["Gitlab", "Github", "Bitbucket"])
    ]);
  }

  @action
  levelUp() {
    this.stage++;
    this.currentQuiz = this.quizzes[this.stage];
  }

  @action
  reset() {
    this.quizzes = this.getQuizzes();
    this.stage = 0;
    this.currentQuiz = this.quizzes[this.stage];
  }
}

export const quizState = new QuizState();
