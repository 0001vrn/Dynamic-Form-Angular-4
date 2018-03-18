import { Injectable }       from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { RadioQuestion }    from './question-radio';
import { CheckboxQuestion } from './question-checkbox';

@Injectable()
export class QuestionService {

  private _questionsURL = 'assets/questions.data.json';

  constructor(private http: HttpClient) {
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getQuestionsFromJSON(): Observable<QuestionBase<any>[]>{
    return this.http.get<QuestionBase<any>[]>(this._questionsURL)
                    .catch(this.handleError);
  }
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   controlType: 'dropdown',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   controlType: 'textbox',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),
      // new TextboxQuestion({
      //   key: 'lastName',
      //   label: 'Last name',
      //   controlType: 'textbox',
      //   value: 'Sharma',
      //   required: true,
      //   order: 2
      // }),

      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   controlType: 'textbox',
      //   type: 'email',
      //   order: 4
      // }),

      // new RadioQuestion({
      //   key: "Gender",
      //   label: "Gender",
      //   value:"M",
      //   controlType: "radio",
      //   type: "radio",
      //   options: [
      //     { key: "Male", value: 'M'},
      //     { key: "Female", value: 'F'}
      //   ],
      //   order: 5
      // }),

      // new CheckboxQuestion({
      //   key: "isMarried",
      //   label: "isMarried",
      //   controlType: "checkbox",
      //   type: "checkbox",
      //   value: true,
      //   order: 6
      // })
      
      
    ];
    let n=50;
    for(let i=1;i<n+1;i++){
      let rq = new RadioQuestion({
        key: `Sample ${i}`,
        label: `Sample Question ${i}`,
        value:'value 1',
        controlType: "radio",
        type: "radio",
        options: [
          { key: "option 1", value: 'value 1'},
          { key: "option 2", value: 'value 2'},
          { key: "option 3", value: 'value 3'},
          { key: "option 4", value: 'value 4'}
        ],
        order: i

      });

      questions.push(rq);
    }

    return questions.sort((a, b) => a.order - b.order);
  }
  getRadioQuestions(n: number){
     
    for(let i=0;i<n;i++){

    }
  }
}


