import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  type: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.options = options['options'] || [];
  }
}
