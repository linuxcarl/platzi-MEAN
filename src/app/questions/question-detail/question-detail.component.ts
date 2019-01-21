import { Component, OnInit, OnDestroy } from '@angular/core';
import { Questions } from '../question.model';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers:[QuestionsService]
})
export class QuestionDetailComponent implements OnInit {
  question?: Questions ;
  loanding = true;
  sub: any;
  constructor(private questionService: QuestionsService,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionService
          .getQuestion(params.id)
          .subscribe((res:Questions) => {
            this.question =  res;
            this.loanding = false;
          })
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();    
  }

}
