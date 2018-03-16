import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
  
    type: string;
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
