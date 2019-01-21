import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Questions } from '../questions/question.model';
import { User } from '../singin/user.model';
import { QuestionsService } from '../questions/questions.service';
import * as SmoothScroll from'smooth-scroll';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers: [QuestionsService]
})
export class AnswerComponent implements OnInit {
  @Input() question: Questions;
  scroll:SmoothScroll;
  constructor(private questionService: QuestionsService) { 
    this.scroll = new SmoothScroll();
  }
  ngOnInit() {
  }

  saveNote(form:NgForm){
    const answer = new Answer(
      form.value.description,
      this.question
    );
     this.questionService.addAnswer(answer)
        .subscribe(
          result =>{
            this.question.answer.unshift(result)
            const anchor = document.querySelector( '#title-answers' );
            this.scroll.animateScroll(anchor);
          },
          e=> console.log(e)
        )
    form.reset();
  }
}
