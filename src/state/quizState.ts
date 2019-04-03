import { observable, action } from "mobx";
import { resetGlobalState } from "mobx/lib/internal";

class Quiz {
  hint: string;
  options: string[];
  answer: string;

  constructor(hint: string, options: string[]) {
    this.hint = hint;
    this.options = options;
    this.answer = options[Math.floor(Math.random() * options.length)];
  }
}

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
    return [
      new Quiz("Javascript framework", ["React", "Angular", "Vue"]),
      new Quiz("React core team", ["Dan Abramov"]),
      new Quiz("CSS framework", ["Bootstrap", "Bulma", "Foundation"]),
      new Quiz("Web browser", ["Brave", "Chrome"]),
      new Quiz("Code hosting platform", ["Gitlab", "Github", "Bitbucket"])
    ];
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

const quizState = new QuizState();

export { quizState };
