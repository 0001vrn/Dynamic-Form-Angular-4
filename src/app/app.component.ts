import { Component }       from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    //service.getQuestionsFromJSON().subscribe((res) => {
      //console.log(res);
      // res.forEach((x : QuestionBase<any>) => {
      //   this.questions.push(x);
      // });
      //this.questions = res;
      //console.log(this.questions);
    //});
  }
}
