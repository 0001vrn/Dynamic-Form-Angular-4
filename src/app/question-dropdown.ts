import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
