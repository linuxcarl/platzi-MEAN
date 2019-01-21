import { Component, OnInit } from '@angular/core';
import { Questions } from '../question.model';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
  providers: [QuestionsService]
})
export class QuestionsListComponent implements OnInit {
  questions: Questions[] ;
  loanding: boolean =  true;
  constructor(private questionService: QuestionsService){

  }

  ngOnInit() {
    this.questionService
        .getQuestions()
        .subscribe((res:Questions[]) => {
          this.questions = res;
          this.loanding =  false;
        }, e => console.log(e));
  }

}
