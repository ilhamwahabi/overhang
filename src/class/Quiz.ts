export default class Quiz {
  hint: string;
  options: string[];
  answer: string[];

  constructor(hint: string, options: string[]) {
    this.hint = hint;
    this.options = options;
    this.answer = options[Math.floor(Math.random() * options.length)].split("");
  }
}
